import { IUserService as IUserProcessorService, } from 'user-domain-model/user.processor';
import { Injectable, } from '@nestjs/common';
import { CreateUserDto, } from 'user-messaging-model/CreateUserDto';

@Injectable()
/** @inheritdoc */
export class UserProcessorService implements IUserProcessorService {
  createUser = async (payload: CreateUserDto,) => {
    console.log('Adding user...',);
    await this.sleep();
    console.log(`User added: ${payload.email}:${payload.password}`,);
  };

  sleep = () => new Promise((resolve,) => setTimeout(resolve, 5000,),);
}
