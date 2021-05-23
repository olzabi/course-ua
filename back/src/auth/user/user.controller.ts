import {
  Controller,
  Get
} from '@nestjs/common';

import { UserDto } from './dto/user.dto';
import { UsersService } from './user.service';

import { JwtPayload } from '../interface/jwt-payload.interface';
import {AuthUser} from "../../shared/auth-user.decorator";
import {Roles} from "../../shared/role.decorator";

@Controller('user')
export class UsersController {
  constructor(
    private usersService: UsersService
  ) {}

  @Get('me')
  @Roles('user', 'premium', 'admin')
  async getMe(@AuthUser() user: JwtPayload): Promise<UserDto> {
    return await this.usersService.findMe(user.id);
  }
}