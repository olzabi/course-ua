import {
  IsEmail,
  IsNotEmpty, IsString
} from "class-validator";

import { roles } from "../../../shared/roles.type";

export class UserDto {
  @IsNotEmpty()
  @IsString()
  id?: string;

  @IsNotEmpty()
  username?: string;

  @IsNotEmpty()
  @IsEmail()
  email?: string;

  @IsNotEmpty()
  password?: string;

  @IsNotEmpty()
  role?: roles;
}

export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;
}

export class SigninUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}