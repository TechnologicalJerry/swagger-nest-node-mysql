import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const PORT = 5000;
const HOST = 'localhost';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Users CRUD')
    .setDescription('The Users API description')
    .setVersion('1.0')
    .addTag('user')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger-ui', app, document);

  await app.listen(PORT);
  Logger.log(`SERVER RUNNING ON HOST=> ${HOST} AT PORT=> ${PORT}`);
}

bootstrap();
