import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity("course")
export class CourseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  rate: number;

  @Column()
  price: number;

  @Column()
  link: string;


}
