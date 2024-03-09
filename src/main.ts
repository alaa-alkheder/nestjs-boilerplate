import { NestApplication, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import swaggerInit from './Plugins/swagger/swagger';
import { AppConfig } from "@config/app-config/app.type";
import { AllConfigType } from "@config/allConfig.type";

async function bootstrap() {


  // const app = await NestFactory.create(AppModule);
  const app: NestApplication = await NestFactory.create(AppModule);


  const configService = app.get(ConfigService<AllConfigType>);
  console.log(configService);

  await app.listen(configService.getOrThrow('app.port', { infer: true }));
}
bootstrap();
