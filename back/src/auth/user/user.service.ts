import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from "./user.entity"
import { UserDto } from "./dto/user.dto";

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async create(user: UserDto):
    Promise<UserDto> {
    const userEntity = new UserEntity();

    userEntity.username = user.username;
    userEntity.password = user.password;
    userEntity.email = user.email;
    userEntity.role = "user";

    let userCreated = await this.userRepository.save(userEntity);

    delete userCreated.password;
    return userCreated;
  }

  async findForAuth(email: string):
    Promise<UserDto> {
    const queryByEmail = await this.userRepository
      .createQueryBuilder("user")
      .select([
        "user.password",
        "user.email",
        "user.id",
        "user.role"
      ])
      .where("user.email = :email", { email: email })
      .getOne();
    return queryByEmail;
  }

  async findOne(user: UserDto):
    Promise<UserDto> {
    const getUser = await this.userRepository.findOne(user);
    return getUser;
  }

  async findMe(userId):
    Promise<UserDto> {
    const getUserById = await this.userRepository
      .createQueryBuilder("user")
      .select([
        "user.id",
        "user.email",
        "user.role",
        "user.pseudo"
      ])
      .where("user.id = :userId", { userId })
      .getOne();
    return getUserById;
  }
}