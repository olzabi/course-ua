import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Query,
  Res
} from "@nestjs/common";

import {CourseService} from "./course.service";
import {CourseDto} from "./dto/course.dto";


@Controller("course")
export class CourseController {
  constructor(
    private courseService: CourseService,
  ) {}

  @Post("/create")
  async createCourse(@Res() res, @Body() courseDto: CourseDto) {
    const course = await this.courseService.createObj(courseDto);

    return res.status(HttpStatus.OK).json({
      message: 'Streamer Successfully Created',
      course,
    });
  }

  @Get("/courses")
  async getAll(@Res() res) {
    const courses = await this.courseService.getAll();

    return res.status(HttpStatus.OK).json(courses);
  }

  @Get("/:courseId")
  async getOne(@Res() res, @Param("courseId") courseId) {
    const courseById = await this.courseService.getOneById(courseId);

    if (!courseById) {
      throw new NotFoundException("The object does not exist!");
    }

    return res.status(HttpStatus.OK).json(courseById);
  }

  @Delete("/delete")
  async delete(@Res() res, @Query("courseId") courseId) {
    const deleteEntity = await this.courseService.deleteById(courseId);

    if (!deleteEntity) {
      throw new NotFoundException('The object does not exist!');
    }

    return res.status(HttpStatus.OK).json({
      message: 'The Object Deleted Successfully',
      deleteEntity
    });
  }
}