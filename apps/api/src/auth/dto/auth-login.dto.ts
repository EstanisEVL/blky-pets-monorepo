import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UserLoginDto {
  @IsNotEmpty()
  @IsEmail({}, { message: 'Please enter a valid email address.' })
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  readonly password: string;
}
