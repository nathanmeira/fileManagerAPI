"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const users_entity_1 = require("./users.entity");
let UsersRepository = class UsersRepository extends typeorm_1.Repository {
    async getTasks() {
        const query = this.createQueryBuilder("users");
        return await query.getMany();
    }
    async createTask(createUsersDto) {
        const users = new users_entity_1.Users();
        users.user_name = createUsersDto.user_name;
        users.token = createUsersDto.token;
        await users.save();
        return users;
    }
};
UsersRepository = __decorate([
    typeorm_1.EntityRepository(users_entity_1.Users)
], UsersRepository);
exports.UsersRepository = UsersRepository;
//# sourceMappingURL=users.repository.js.map