import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log("http://localhost:3000")
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true
  }))


  const config = new DocumentBuilder()
    .setTitle('Users example')
    .setDescription('The users API description')
    .setVersion('1.0')
    .addTag('users')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  /* 
  cors custom
  app.enableCors({
    origin:"http://localhost:4200"
  })
 */

  app.enableCors()

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
