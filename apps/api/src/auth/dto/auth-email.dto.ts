import { IsEmail, IsNotEmpty } from 'class-validator';

export class EmailInputDto {
  @IsNotEmpty()
  @IsEmail({}, { message: 'Please enter a valid email address.' })
  readonly email: string;
}
