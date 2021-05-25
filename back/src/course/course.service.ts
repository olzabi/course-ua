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

  // get all
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

    const courses = await this.courseRepo.find();

    return courses;
    // return query;
  }

  // get single obj
  async getOneById(objId: string):
    Promise<CourseEntity> {
    const course = await this.courseRepo.findOne({ where: { id: objId }});

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
      .where("course.id = :courseId", { objId })
      .getOne();

    return getCourseByQuery;
  }

  // post && update
  async createObj(courseDto: CourseDto):
    Promise<CourseEntity> {
    let courseEntity: CourseEntity;
    if (!!courseEntity.id) {
      courseEntity = await this.courseRepo.findOne({ where: { id: courseDto.id }});
      if (!courseEntity) {
        courseEntity = new CourseEntity();
        courseEntity.id = courseDto.id;
      }
    }

    if (!courseEntity) {
      courseEntity = new CourseEntity();
    }

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
    Promise<DeleteResult> {
    const deleteCond = await this.courseRepo.delete(courseId);

    const query = await this.courseRepo
      .createQueryBuilder("course")
      .delete()
      .from(CourseEntity)
      .where("id = :id", { id: courseId })
      .execute();
    return query;
  }
}
