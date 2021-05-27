import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Query,
  Res
} from "@nestjs/common";

import {
  ApiBody,
  ApiProperty,
  ApiResponse
} from "@nestjs/swagger";

import {CourseService} from "./course.service";
import {CourseDto} from "./dto/course.dto";


@Controller("course")
export class CourseController {
  constructor(
    private courseService: CourseService,
  ) {}

  @Post("/create")
  @HttpCode(200)
  async createCourse(@Res() res, @Body() courseDto: CourseDto) {
    const course = await this.courseService.createCourse(courseDto);

    return res.status(HttpStatus.OK).json({
      message: 'Course Successfully Created',
      course,
    });
  }

  @Get("/courses")
  @HttpCode(200)
  async getAll(@Res() res) {
    const courses = await this.courseService.getAll();

    return res.status(HttpStatus.OK).json(courses);
  }

  @Get("/:courseId")
  @HttpCode(200)
  @ApiBody({ type: [CourseDto]})
  @ApiResponse({ status: 200, description: "Takes object by given ID"})
  async getOne(@Res() res, @Param("courseId") courseId) {
    const courseById = await this.courseService.getCourseById(courseId);

    if (!courseById) {
      throw new NotFoundException("The object does not exist!");
    }

    return res.status(HttpStatus.OK).json(courseById);
  }

  @Delete("/delete")
  @HttpCode(200)
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