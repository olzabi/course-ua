import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { roles } from "../../shared/roles.type";


@Entity("user")
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column({ default: true, select: false })
  password: string;

  @Column()
  role: roles;
}