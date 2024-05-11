import { Module } from '@nestjs/common';
import { ErrorModule } from 'src/common/error/error.module';
import { MessageModule } from 'src/common/message/message.module';
import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';
import allConfig from 'src/config/allConfig.type';
import { ENUM_APP_ENVIRONMENT } from './constants/app.enum.constant';
import { ENUM_MESSAGE_LANGUAGE } from './message/constants/message.enum.constant';
import { APP_LANGUAGE } from './constants/app.constant';
import { HelperModule } from "./helper/helper.module";

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      load: allConfig,
      isGlobal: true,
      cache: true,
      envFilePath: ['.env'],
      expandVariables: true,
      // validationSchema: Joi.object({
      //   APP_NAME: Joi.string().required(),
      //   APP_ENV: Joi.string()
      //     .valid(...Object.values(ENUM_APP_ENVIRONMENT))
      //     .default('development')
      //     .required(),
      //   APP_LANGUAGE: Joi.string()
      //     .valid(...Object.values(ENUM_MESSAGE_LANGUAGE))
      //     .default(APP_LANGUAGE)
      //     .required(),
      //   APP_TZ: Joi.string().required(),
      //   APP_MAINTENANCE: Joi.boolean().default(false).required(),
      //
      //   HTTP_ENABLE: Joi.boolean().default(true).required(),
      //   HTTP_HOST: [
      //     Joi.string().ip({ version: 'ipv4' }).required(),
      //     Joi.valid('localhost').required(),
      //   ],
      //   HTTP_PORT: Joi.number().default(3000).required(),
      //   HTTP_VERSIONING_ENABLE: Joi.boolean().default(true).required(),
      //   HTTP_VERSION: Joi.number().required(),
      //
      //   // DEBUGGER_WRITE_INTO_FILE: Joi.boolean().default(false).required(),
      //
      //   // JOB_ENABLE: Joi.boolean().default(false).required(),
      //
      //   // DATABASE_HOST: Joi.string()
      //   //   .default('mongodb://localhost:27017')
      //   //   .required(),
      //   // DATABASE_NAME: Joi.string().default('ack').required(),
      //   // DATABASE_USER: Joi.string().allow(null, '').optional(),
      //   // DATABASE_PASSWORD: Joi.string().allow(null, '').optional(),
      //   // DATABASE_DEBUG: Joi.boolean().default(false).required(),
      //   // DATABASE_OPTIONS: Joi.string().allow(null, '').optional(),
      //   //
      //   // AUTH_JWT_SUBJECT: Joi.string().required(),
      //   // AUTH_JWT_AUDIENCE: Joi.string().required(),
      //   // AUTH_JWT_ISSUER: Joi.string().required(),
      //   //
      //   // AUTH_JWT_ACCESS_TOKEN_EXPIRED: Joi.string().default('15m').required(),
      //   // AUTH_JWT_ACCESS_TOKEN_SECRET_KEY: Joi.string()
      //   //   .alphanum()
      //   //   .min(5)
      //   //   .max(50)
      //   //   .required(),
      //   // AUTH_JWT_REFRESH_TOKEN_EXPIRED: Joi.string().default('182d').required(),
      //   // AUTH_JWT_REFRESH_TOKEN_SECRET_KEY: Joi.string()
      //   //   .alphanum()
      //   //   .min(5)
      //   //   .max(50)
      //   //   .required(),
      //   //
      //   // AUTH_JWT_PAYLOAD_ENCRYPT: Joi.boolean().default(false).required(),
      //   // AUTH_JWT_PAYLOAD_ACCESS_TOKEN_ENCRYPT_KEY: Joi.string()
      //   //   .allow(null, '')
      //   //   .min(20)
      //   //   .max(50)
      //   //   .optional(),
      //   // AUTH_JWT_PAYLOAD_ACCESS_TOKEN_ENCRYPT_IV: Joi.string()
      //   //   .allow(null, '')
      //   //   .min(16)
      //   //   .max(50)
      //   //   .optional(),
      //   // AUTH_JWT_PAYLOAD_REFRESH_TOKEN_ENCRYPT_KEY: Joi.string()
      //   //   .allow(null, '')
      //   //   .min(20)
      //   //   .max(50)
      //   //   .optional(),
      //   // AUTH_JWT_PAYLOAD_REFRESH_TOKEN_ENCRYPT_IV: Joi.string()
      //   //   .allow(null, '')
      //   //   .min(16)
      //   //   .max(50)
      //   //   .optional(),
      //   //
      //   // AWS_S3_CREDENTIAL_KEY: Joi.string().allow(null, '').optional(),
      //   // AWS_S3_CREDENTIAL_SECRET: Joi.string().allow(null, '').optional(),
      //   // AWS_S3_REGION: Joi.string().allow(null, '').optional(),
      //   // AWS_S3_BUCKET: Joi.string().allow(null, '').optional(),
      //   // AWS_SES_CREDENTIAL_KEY: Joi.string().allow(null, '').optional(),
      //   // AWS_SES_CREDENTIAL_SECRET: Joi.string().allow(null, '').optional(),
      //   // AWS_SES_REGION: Joi.string().allow(null, '').optional(),
      //   //
      //   // SSO_GOOGLE_CLIENT_ID: Joi.string().allow(null, '').optional(),
      //   // SSO_GOOGLE_CLIENT_SECRET: Joi.string().allow(null, '').optional(),
      //   //
      //   // SENTRY_DSN: Joi.string().allow(null, '').optional(),
      // }),
      validationOptions: {
        allowUnknown: true,
        abortEarly: true,
      },
    }),
    // MongooseModule.forRootAsync({
    //   connectionName: DATABASE_CONNECTION_NAME,
    //   imports: [DatabaseOptionsModule],
    //   inject: [DatabaseOptionsService],
    //   useFactory: (databaseOptionsService: DatabaseOptionsService) =>
    //     databaseOptionsService.createOptions(),
    // }),
    // MessageModule,
    HelperModule,
    // PaginationModule,
    ErrorModule,
    // ResponseModule,
    // RequestModule,
    // PolicyModule,
    // DebuggerLoggerModule,
    // ApiKeyModule,
    // AuthModule.forRoot(),
  ],
})
export class CommonModule {}
