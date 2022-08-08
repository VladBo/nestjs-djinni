import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class AuthDto {
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  password: string;
}

export interface TokenTypes {
  token: string;
  userId: string;
}
