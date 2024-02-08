import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const ormConfig: TypeOrmModuleOptions = { 
    type: 'postgres',
    host: 'localhost',
    port: 6000,
    username: 'postgres',
    password: 'admin',
    database: 'nestjs_auth',
    synchronize: true,
    entities: ['dist/**/*.entity{.ts,.js}'],
}
