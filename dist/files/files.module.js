"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const files_controller_1 = require("./files.controller");
const typeorm_1 = require("@nestjs/typeorm");
const files_repository_1 = require("./files.repository");
const files_service_1 = require("./files.service");
const users_module_1 = require("../users/users.module");
const users_repository_1 = require("../users/users.repository");
const content_repository_1 = require("../file_content/content.repository");
let FilesModule = class FilesModule {
};
FilesModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([files_repository_1.FilesRepository]), typeorm_1.TypeOrmModule.forFeature([users_repository_1.UsersRepository]), typeorm_1.TypeOrmModule.forFeature([content_repository_1.ContentRepository])],
        controllers: [files_controller_1.FilesController],
        providers: [files_service_1.FilesService]
    })
], FilesModule);
exports.FilesModule = FilesModule;
//# sourceMappingURL=files.module.js.map