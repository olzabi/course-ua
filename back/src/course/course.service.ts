import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import { DeleteResult, Repository} from "typeorm";


import {CourseEntity} from "./course.entity";
import {CourseDto} from "./dto/course.dto";

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(CourseEntity)
    private readonly courseRepo: Repository<CourseEntity>,
  ) {}


  // Promise<courseResponse> {
  async getAll():
    Promise<CourseEntity[]> {
    const query = await this.courseRepo
      .createQueryBuilder("course")
      .select([
        "course.id",
        "course.name",
        "course.description",
        "course.price",
        "course.rate",
        "course.pictureUrl",
      ])
      .getMany();

    return query;
    // const courses = await this.courseRepo.find();
    // return courses;
  }

  // get single course
  async getCourseById(objId: string):
    Promise<CourseEntity> {
    // const course = await this.courseRepo.findOne({ where: { id: objId }});
    // return course;

    const getCourseByQuery = await this.courseRepo
      .createQueryBuilder("course")
      .select([
        "course.id",
        "course.name",
        "course.description",
        "course.price",
        "course.rate",
        "course.pictureUrl",
      ])
      .where("course.id = :id", { id: objId })
      .getOne();

    return getCourseByQuery;
  }


  async createCourse(courseDto: CourseDto):
    Promise<CourseEntity> {
    let courseEntity: CourseEntity = new CourseEntity();

    try {

      courseEntity.name = courseDto.name;
      courseEntity.description = courseDto.description;
      courseEntity.link = courseDto.link;
      courseEntity.price = courseDto.price;
      courseEntity.pictureUrl = courseDto.pictureUrl;
      courseEntity.rate = courseDto.rate;

      await this.courseRepo.save(courseEntity);
    } catch (err) {
      console.log(err);
    }
    return new Promise(resolve => resolve(courseEntity));
  }

  async deleteById(courseId: string):
    Promise<any> {
    // const deleteCond = await this.courseRepo.delete(courseId);
    // return deleteCond;

    const deleteQuery = await this.courseRepo
      .createQueryBuilder("course")
      .delete()
      .from(CourseEntity)
      .where("id = :id", { id: courseId })
      .execute();
    return deleteQuery;
  }
}
