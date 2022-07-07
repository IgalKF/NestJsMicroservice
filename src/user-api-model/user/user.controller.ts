import { Controller, Inject, } from '@nestjs/common';
import { MessagePattern, Payload, } from '@nestjs/microservices';
import { CreateUserDto, } from 'user-messaging-model/CreateUserDto';
import { IUserService as IUserProcessorService, } from 'user-domain-model/user.processor';

@Controller()
/**
 * Users' management controller providing api.
 * @date 2022-05-12
 * @returns {any}
 */
export default class UserController {
  /**
   * Users' controller constractor.
   * @date 2022-05-12
   * @param {IUserProcessorService} userProcessorService
   * @returns {any}
   */
  constructor (
    @Inject(IUserProcessorService,)
      private readonly userService: IUserProcessorService,
  ) { }

  @MessagePattern('create_user',)

  /**
   * 描述
   * @date 2022-05-12
   * @param {CreateUserDto} userCredentials
   * @returns {any}
   */
  async createUser (
  @Payload()
    userCredentials: CreateUserDto,
  ) {
    const user = await this.userService.createUser(userCredentials,);
    return user;
  }
}
