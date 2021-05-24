import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

export const config: TypeOrmModuleOptions = {
  type: "postgres",
  username: "postgres",
  password: "11",
  port: 5432,
  host: "localhost",
  database: "Course_ua_db",
  synchronize: true,
  entities: [
    "./dist/**/*.entity.{ts,js}"
  ],
  namingStrategy: new SnakeNamingStrategy()
}
