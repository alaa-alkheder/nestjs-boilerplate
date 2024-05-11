import { NestApplication, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import swaggerInit from './Plugins/swagger/swagger';
import allConfig from "@config/allConfig.type";

async function bootstrap() {


  const app: NestApplication = await NestFactory.create(AppModule);


  // const configService = app.get(ConfigService<>);


  await swaggerInit(app)
  const configService = app.get(ConfigService);

  const port: number = configService.get<number>('app.http.port');

  await app.listen(3000);
  // await app.listen(configService.getOrThrow('app.port', { infer: true }));
}
bootstrap();
