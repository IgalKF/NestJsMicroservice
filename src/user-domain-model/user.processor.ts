import { CreateUserDto, } from '../user-messaging-model/CreateUserDto';

export interface IUserService {

  createUser(payload: CreateUserDto): void;

  sleep(): void;
}

export const IUserService = Symbol('IUserService',);
