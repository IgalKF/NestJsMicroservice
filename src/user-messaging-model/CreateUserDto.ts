import { IsString, IsEmail, } from 'class-validator';

/**
 * 描述
 * @date 2022-05-15
 * @returns {any}
 */
export class CreateUserDto {
  @IsEmail()
    email: string;

  @IsString()
    password: string;
}
