import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from './config/orm.config';
import { AuthModule } from './auth/auth.module'; 
import { UserModule } from './user/user.module'; 
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule, 
    UserModule,
  ],
})
export class AppModule {}
