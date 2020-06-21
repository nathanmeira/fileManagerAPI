"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = {
    type: 'mysql',
    host: 'localhost',
    port: 32773,
    username: 'root',
    password: 'root',
    database: 'test',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
};
//# sourceMappingURL=typeorm.config.js.map