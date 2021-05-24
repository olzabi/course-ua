import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";

import {UserModule} from "./auth/user/user.module";
import {AuthModule} from "./auth/auth.module";

import { AppService } from './app.service';
import { AppController } from './app.controller';

import {config} from "./config/orm.config";


@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
