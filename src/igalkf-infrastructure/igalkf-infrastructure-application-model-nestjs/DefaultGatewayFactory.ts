import { IDefaultGatewayFactory, } from 'igalkf-infrastructure/igalkf-infrastructure-application-model/IDefaultGatewayFactory';
import { NestFactoryStatic, } from '@nestjs/core/nest-factory';
import { INestApplication, } from '@nestjs/common';
import { NestApplicationContextOptions, } from '@nestjs/common/interfaces/nest-application-context-options.interface';
import { DocumentBuilder, SwaggerModule, } from '@nestjs/swagger';

/** @inheritdoc */
export class DefaultGatewayFactory extends NestFactoryStatic implements IDefaultGatewayFactory {
  private microserviceGatewayInstance: INestApplication;
  private gatewayOptions: NestApplicationContextOptions;

  constructor (gatewayOptions: NestApplicationContextOptions,) {
    super();

    this.gatewayOptions = gatewayOptions;
  }

  createDefaultGateway =
    async <T extends object> (module: any, options?: NestApplicationContextOptions & T,): Promise<INestApplication> => {
      this.microserviceGatewayInstance = await this.create(module, options,);
      return this.microserviceGatewayInstance;
    };

  addSwagger = () => {
    const config = new DocumentBuilder()
      .setTitle('Cats example',)
      .setDescription('The cats API description',)
      .setVersion('1.0',)
      .addTag('cats',)
      .build();
    const document = SwaggerModule.createDocument(this.microserviceGatewayInstance, config,);
    SwaggerModule.setup('api', this.microserviceGatewayInstance, document,);
  };

  public registerServices: any = () => {
  };
}
