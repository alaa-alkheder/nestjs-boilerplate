import { AppConfig } from '@config/app-config/app.type';
import { SwaggerConfig } from "@config/swagger-config/swagger.type";

export type AllConfigType = {
  app: AppConfig;
  swagger:SwaggerConfig
};
