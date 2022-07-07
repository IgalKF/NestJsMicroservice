/* eslint-disable semi */
import { CreateUserDto, } from '../../user-messaging-model/CreateUserDto';
import { Test, TestingModule, } from '@nestjs/testing';
import UserController from './user.controller';
import { UserProcessorService, } from '../../user-domain-model-impl/user.processor.service';

describe('AppController', () => {
  let appController: UserController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [
        UserController,
      ],
      providers: [
        UserProcessorService,
      ],
    },).compile();

    appController = app.get<UserController>(UserController,);
  },);

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.createUser(<CreateUserDto>{
        email: 'igalkf@gmail.com',
        password: '123456',
      },),).toBe(<CreateUserDto>{
        email: 'igalkf@gmail.com',
        password: '123456',
      },);
    },);
  },);
},);
