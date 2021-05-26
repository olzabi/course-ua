import {
  DocumentBuilder,
  SwaggerModule
} from "@nestjs/swagger";
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('CourseUA')
    .setDescription('The CourseUA API description')
    .setVersion('1.0')
    .addTag('course-ua')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);


  await app.listen(3000);
}
bootstrap();
