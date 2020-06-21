import {TypeOrmModuleOptions} from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 32773,
    username: 'root',
    password: 'root',
    database: 'test',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
}