import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import appConfig from '@config/app-config/app.config';
import swaggerConfig from '@config/swagger-config/swagger.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/config/env/${process.env.NODE_ENV}.env`,
      load: [appConfig, swaggerConfig],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
