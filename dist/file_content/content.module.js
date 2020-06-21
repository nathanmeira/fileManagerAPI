"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const content_controller_1 = require("./content.controller");
const typeorm_1 = require("@nestjs/typeorm");
const content_repository_1 = require("./content.repository");
const content_service_1 = require("./content.service");
let ContentModule = class ContentModule {
};
ContentModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([content_repository_1.ContentRepository])],
        controllers: [content_controller_1.ContentController],
        providers: [content_service_1.ContentService]
    })
], ContentModule);
exports.ContentModule = ContentModule;
//# sourceMappingURL=content.module.js.map