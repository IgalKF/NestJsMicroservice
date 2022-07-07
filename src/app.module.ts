import { Module, } from '@nestjs/common';
import UserController from 'user-api-model/user/user.controller';
import { UserProcessorService, } from 'user-domain-model-impl/user.processor.service';
import { IUserService as IUserProcessorService, } from './user-domain-model/user.processor';

@Module({
  imports: [],
  controllers: [
    UserController,
  ],
  providers: [
    { provide: IUserProcessorService, useClass: UserProcessorService, },
  ],
},)

/** */
export class AppModule { }
