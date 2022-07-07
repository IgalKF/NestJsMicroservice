import { DocumentBuilder, SwaggerModule, } from '@nestjs/swagger';
import { DefaultMicroserviceFactory, } from 'igalkf-infrastructure/igalkf-infrastructure-application-model-nestjs/DefaultMicroserviceFactory';

/** @inheritdoc */
export class UserMicroserviceFactory extends DefaultMicroserviceFactory {
  public override registerBackendServices: () => {
  };

  registerFrontendServices = () => {
    const config = new DocumentBuilder()
      .setTitle('Cats example',)
      .setDescription('The cats API description',)
      .setVersion('1.0',)
      .addTag('cats',)
      .build();
    const document = SwaggerModule.createDocument(this.microserviceFrontendInstance, config,);
    SwaggerModule.setup('api', this.microserviceFrontendInstance, document,);
  };
}
