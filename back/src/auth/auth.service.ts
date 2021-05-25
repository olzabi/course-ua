import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';

import {UsersService} from "./user/user.service";
import {UserDto} from "./user/dto/user.dto";
import {JwtPayload} from "./interface/jwt-payload.interface";

const secretKey = "THIS_STRING_IS_NOT_PANOGRAMA_KHEKHE#%!@*%43^";

@Injectable()
export class AuthService {
  private saltRounds = 10;

  constructor(
    private userService: UsersService,
  ) {}

  async signUp(user: UserDto):
    Promise<UserDto> {
    user.password = await bcrypt.hash(user.password, this.saltRounds);
    return await this.userService.create(user);
  }

  async signIn(email: string, password: string):
    Promise<UserDto> {
    const user = await this.userService.findForAuth(email);
    if (!user) return null;

    const match = await bcrypt.compare(password, user.password);
    if (!match) return null;

    return user;
  }

  async createToken(user: UserDto):
    Promise<string> {
    const jwtPayload: JwtPayload = { id: user.id, email: user.email, role: user.role };

    return await jwt.sign(jwtPayload, secretKey, { expiresIn: "365d" });
  }
}