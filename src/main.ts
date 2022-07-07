import { Transport, } from '@nestjs/microservices';
import { AppModule, } from 'app.module';
import { UserMicroserviceFactory, } from 'user-application-model/UserMicroserviceFactory';

const microservicesBackendOptions: any = {
  transport: Transport.TCP,
  options: {
    host: '127.0.0.1',
    port: 8875,
  },
};

const microservicesFrontendOptions: any = {
  transport: Transport.TCP,
  options: {
    host: '127.0.0.1',
    port: 3000,
  },
};

const userMicroserviceFactory = new UserMicroserviceFactory(microservicesFrontendOptions, microservicesBackendOptions,);

userMicroserviceFactory.createDefaultMicroserviceFrontend(AppModule, 3000,);
