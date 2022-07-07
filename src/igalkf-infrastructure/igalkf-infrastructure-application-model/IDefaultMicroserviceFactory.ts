import { INestMicroservice, INestApplication, } from '@nestjs/common';
import { NestMicroserviceOptions, } from '@nestjs/common/interfaces/microservices/nest-microservice-options.interface';

export interface IDefaultMicroserviceFactory {
    createDefaultMicroserviceBackend<T extends object>(module: any, options?: NestMicroserviceOptions & T): Promise<INestMicroservice>
    createDefaultMicroserviceFrontend<T extends object>(module: any, port: number, options?: NestMicroserviceOptions & T): Promise<INestApplication>
    registerFrontendServices(): void;
    registerBackendServices(): void;
}
