import { INestApplication, } from '@nestjs/common';
import { NestMicroserviceOptions, } from '@nestjs/common/interfaces/microservices/nest-microservice-options.interface';

export interface IDefaultGatewayFactory {
    createDefaultGateway<T extends object>(module: any, options?: NestMicroserviceOptions & T): Promise<INestApplication>
    registerServices() : void;
    addSwagger(): void;
}
