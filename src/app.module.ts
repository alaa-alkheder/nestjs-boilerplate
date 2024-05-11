import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';
 import appConfig from '@config/app-config/app.config';
import swaggerConfig from '@config/swagger-config/swagger.config';
import { PrismaModule } from "@providers/prisma";
import { CommonModule } from './common/common.module';

@Module({
  imports: [ CommonModule,
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/config/env/${process.env.NODE_ENV}.env`,
      load: [appConfig, swaggerConfig],
    }),
    PrismaModule.forRoot({
      isGlobal: true,
      prismaServiceOptions: {
        // middlewares: [loggingMiddleware(), createUserMiddleware()],
      },
    }),
    UserModule,
   ],
  controllers: [],
  providers: [],
})
export class AppModule {}
