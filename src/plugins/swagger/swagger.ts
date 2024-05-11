import { Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestApplication } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import allConfig from "@config/allConfig.type";
import { writeFileSync } from "fs";
import { ResponseDefaultSerialization } from "../../common/response/response.default.serialization";
import { ResponsePagingSerialization } from "../../common/response/response.paging.serialization";


export default async function (app: NestApplication) {
  const configService = app.get(ConfigService);
  const logger = new Logger();
  const env: string = configService.get<string>('app.nodeEnv');
   const docName: string = configService.get<string>('swagger.docName');
  const docDesc: string = configService.get<string>('swagger.docDesc');
  const docVersion: string = configService.get<string>('swagger.docVersion');
  const docPrefix: string = configService.get<string>('swagger.docPrefix');


  if (env !== 'production') {
    const documentBuild = new DocumentBuilder()
      .setTitle(docName)
      .setDescription(docDesc)
      .setVersion(docVersion)
      .addServer('/')
      .addBearerAuth(
        { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
        'accessToken',
      )
      .addBearerAuth(
        { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
        'refreshToken',
      )
      .addBearerAuth(
        { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
        'google',
      )
      .addApiKey({ type: 'apiKey', in: 'header', name: 'x-api-key' }, 'apiKey')
      .build();

    const document = SwaggerModule.createDocument(app, documentBuild, {
      deepScanRoutes: true,
      extraModels: [ResponseDefaultSerialization, ResponsePagingSerialization],
    });

    writeFileSync('./data/json', JSON.stringify(document));
    SwaggerModule.setup(docPrefix, app, document, {
      jsonDocumentUrl: `${docPrefix}/json`,
      yamlDocumentUrl: `${docPrefix}/yaml`,
      customSiteTitle: 'docName',
      swaggerOptions: {
        docExpansion: 'none',
        persistAuthorization: true,
        displayOperationId: true,
        operationsSorter: 'method',
        tagsSorter: 'alpha',
        tryItOutEnabled: true,
        filter: true,
        deepLinking: true,
      },
    });

    logger.log(`==========================================================`);

    logger.log(`Docs will serve on ${'docPrefix'}`, 'NestApplication');

    logger.log(`==========================================================`);
  }
}
