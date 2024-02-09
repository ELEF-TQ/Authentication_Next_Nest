import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module'; 
import { UserService } from 'src/user/user.service';
import { UserRepository } from 'src/user/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';

@Module({
  imports: [UserModule ,TypeOrmModule.forFeature([ User,UserRepository])],
  controllers: [AuthController],
  providers: [AuthService, JwtService,UserService], 
})
export class AuthModule {}
