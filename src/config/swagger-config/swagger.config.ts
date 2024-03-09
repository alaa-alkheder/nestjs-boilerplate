import { registerAs } from '@nestjs/config';
import validateConfig from '@utils/validate-config';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { SwaggerConfig } from './swagger.type';

enum Environment {
  Development = 'development',
  Production = 'production',
  Test = 'test',
}

class EnvironmentVariablesValidator {
  @IsEnum(Environment)
  @IsOptional()
  NODE_ENV: Environment;

  @IsString()
  @IsOptional()
  docName: string;

  @IsString()
  @IsOptional()
  docDesc: string;

  @IsString()
  @IsOptional()
  docVersion: string;

  @IsString()
  @IsOptional()
  docPrefix: string;
}

export default registerAs<SwaggerConfig>('swagger', () => {
  validateConfig(process.env, EnvironmentVariablesValidator);
  return {
    nodeEnv: process.env.NODE_ENV || 'development',

    docName: process.env.SWAGGER_NAME || 'NestJ API',
    docDesc: process.env.SWAGGER_DESCRIPTION || 'Welcome in our boilerplate',
    docVersion: process.env.SWAGGER_VERSION || '1.0.0',
    docPrefix: process.env.SWAGGER_PREFIX || 'api',
  };
});
