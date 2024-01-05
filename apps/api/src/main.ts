import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { CORS } from './constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('BLKY PETS API')
    .setDescription('The BLKY PETS API description.')
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  const configService = app.get(ConfigService);
  const PORT_APP: number = Number(configService.get('PORT')) || 8080;
  const NODE_ENV: string = configService.get('NODE_ENV');

  app.enableCors(CORS);

  app.setGlobalPrefix('api');

  await app.listen(PORT_APP);
  console.log(`Running on PORT: ${PORT_APP} | Environment: ${NODE_ENV}`);
}
bootstrap();
