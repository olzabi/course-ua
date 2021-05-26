import {
  IsNotEmpty,
  IsNumber,
  IsString
} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CourseDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  id?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  rate?: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  link?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  pictureUrl: string;
}