import { IDefaultMicroserviceFactory, } from 'igalkf-infrastructure/igalkf-infrastructure-application-model/IDefaultMicroserviceFactory';
import { NestFactoryStatic, } from '@nestjs/core/nest-factory';
import { INestMicroservice, INestApplication, } from '@nestjs/common';
import { NestApplicationContextOptions, } from '@nestjs/common/interfaces/nest-application-context-options.interface';

/** @inheritdoc */
export class DefaultMicroserviceFactory extends NestFactoryStatic implements IDefaultMicroserviceFactory {
  protected microserviceBackendInstance: INestMicroservice;
  protected microserviceFrontendInstance: INestApplication;
  protected microserviceBackendOptions: NestApplicationContextOptions;
  protected microserviceFrontendOptions: NestApplicationContextOptions;

  constructor (
    microserviceBackendOptions?: NestApplicationContextOptions,
    microserviceFrontendOptions?: NestApplicationContextOptions,) {
    super();

    this.microserviceFrontendOptions = microserviceFrontendOptions;
    this.microserviceBackendOptions = microserviceBackendOptions;
  }

  public createDefaultMicroserviceBackend =
    async (module: any,): Promise<INestMicroservice> => {
      this.microserviceBackendInstance = await this.createMicroservice(module, this.microserviceBackendOptions,);

      this.registerBackendServices();

      this.microserviceBackendInstance.listen();

      return this.microserviceBackendInstance;
    };

  public createDefaultMicroserviceFrontend =
    async (module: any, port: number,): Promise<INestApplication> => {
      this.microserviceFrontendInstance = await this.create(module, this.microserviceFrontendOptions,);

      this.registerFrontendServices();

      this.microserviceFrontendInstance.listen(port,);

      return this.microserviceFrontendInstance;
    };

  public registerFrontendServices: any = () => {
  };

  public registerBackendServices: any = () => {
  };
}
