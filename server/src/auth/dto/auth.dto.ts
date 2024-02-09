import { IsEmail, IsString } from 'class-validator';
import { CreateUserDto } from 'src/user/dto/user.dto';

export class LoginDto {
    
  @IsEmail()
  email: string;

  @IsString()
  password: string;

}

export class SignUpDto extends CreateUserDto{}