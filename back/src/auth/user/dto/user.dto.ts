import {
  IsEmail,
  IsNotEmpty,
  IsString
} from "class-validator";

import { roles } from "../../../shared/roles.type";
import {ApiProperty} from "@nestjs/swagger";

export class UserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  id?: string;

  @ApiProperty()
  @IsNotEmpty()
  username?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email?: string;

  @ApiProperty()
  @IsNotEmpty()
  password?: string;

  @ApiProperty()
  @IsNotEmpty()
  role?: roles;
}

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;
}

export class SigninUserDto {
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;
}