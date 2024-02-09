import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from './user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ User,UserRepository])],
  providers: [UserService, JwtService ], 
  controllers: [UserController],
  exports: [UserService ],
})
export class UserModule {}
