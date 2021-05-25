import {
  IsNotEmpty,
  IsNumber,
  IsString
} from "class-validator";

export class CourseDto {
  @IsNotEmpty()
  @IsString()
  id?: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description?: string;

  @IsNotEmpty()
  @IsNumber()
  rate?: number;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsString()
  link?: string;

  @IsNotEmpty()
  @IsString()
  pictureUrl: string;
}