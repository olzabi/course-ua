import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param, ParseUUIDPipe,
  Post,
  Query,
  Res
} from "@nestjs/common";

import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiProperty,
  ApiResponse,
  ApiTags
} from "@nestjs/swagger";

import {CourseService} from "./course.service";
import {CourseDto} from "./dto/course.dto";

@ApiTags("course")
@Controller("course")
export class CourseController {
  constructor(
    private courseService: CourseService,
  ) {}

  @Post("/create")
  @HttpCode(200)
  @ApiOperation({ summary: "create object"})
  async createCourse(@Res() res, @Body() courseDto: CourseDto) {
    const course = await this.courseService.createCourse(courseDto);

    return res.status(HttpStatus.OK).json({
      message: 'Course Successfully Created',
      course,
    });
  }

  @Get("/courses")
  @HttpCode(200)
  @ApiOperation({ summary: "find all objects"})
  @ApiResponse({
    status: 200,
    description: "The function select all object of course.entity and returns the array of objects.",
    type: CourseDto
  })
  async getAll(@Res() res):
    Promise<CourseDto[]> {
    const courses = await this.courseService.getAll();

    return res.status(HttpStatus.OK).json(courses);
  }

  @Get("/:courseId")
  @HttpCode(200)
  @ApiOperation({ summary: "find object"})
  @ApiResponse({
    status: 200,
    description: "Takes object by given ID",
    type: [CourseDto]
  })
  async getOne(@Res() res, @Param("courseId", new ParseUUIDPipe()) courseId: string):
    Promise<CourseDto> {
    const courseById = await this.courseService.getCourseById(courseId);

    if (!courseById) {
      throw new NotFoundException("The object does not exist!");
    }

    return res.status(HttpStatus.OK).json(courseById);
  }

  @Delete("/delete")
  @HttpCode(200)
  @ApiOperation({ summary: "Delete the object."})
  @ApiResponse({ status: 200, description: "Successfully deleted."})
  async delete(@Res() res, @Query("courseId") courseId: string) {
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