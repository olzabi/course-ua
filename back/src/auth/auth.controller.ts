import {
  Controller,
  Body,
  Param,
  Res,
  HttpStatus,
  Get,
  Post,
  ForbiddenException,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';


import { UsersService } from './user/user.service';
import { AuthService } from './auth.service';

import { UserDto } from './user/dto/user.dto';
import { CreateUserDto } from './user/dto/user.dto';
import { SigninUserDto } from './user/dto/user.dto';

import { JwtPayload } from './interface/jwt-payload.interface';
import {Roles} from "../shared/role.decorator";
import {AuthUser} from "../shared/auth-user.decorator";

@Controller('auth')
export class AuthController {

  constructor(
    private authService: AuthService,
    private usersService: UsersService
  ) {}

  @Post('sign-in')
  async signIn(@Body() body: SigninUserDto): Promise<{ token: string }> {
    const user = await this.authService.signIn(body.email, body.password);

    if (!user)
      throw new NotFoundException("No user found");

    let token = await this.authService.createToken(user);

    return {
      token
    };
  }

  @Post('sign-up')
  async signUp(@Body() createUserDto: CreateUserDto):
    Promise<{ success: boolean }> {
    const emailConflict = await this.usersService.findOne({ email: createUserDto.email });

    if (emailConflict)
      throw new ConflictException("email");

    const user = await this.authService.signUp(createUserDto);

    if (user) {
      return {
        success: true
      };
    }

    return {
      success: false
    };
  }

  @Get('refresh-token')
  @Roles("user", "premium", "admin")
  async refreshToken(@AuthUser() user: JwtPayload):
    Promise<{ me: UserDto, token: string }> {
    let me = await this.usersService.findMe(user.id);
    let token = await this.authService.createToken(me);

    return {
      me,
      token
    };
  }

  @Get('email-free/:email')
  async emailFree(@Param() params):
    Promise<{ success: boolean }> {
    const user = await this.usersService.findOne({
      email: params.email
    });

    if (!user) {
      return {
        success: true
      };
    }

    return {
      success: false
    };
  }
}