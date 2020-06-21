"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const content_entity_1 = require("./content.entity");
let ContentRepository = class ContentRepository extends typeorm_1.Repository {
    async getContent() {
        const query = this.createQueryBuilder("content");
        return await query.getMany();
    }
    async getContentById(idContent) {
        const query = this.createQueryBuilder("content")
            .where("content.id = :id", { id: idContent });
        return await query.getOne();
    }
    async createContent(createContentDto) {
        const content = new content_entity_1.Content();
        content.content = createContentDto.content;
        await content.save();
        return content;
    }
    async updateContent(idContent, createContentDto) {
        const query = this.createQueryBuilder("content")
            .update(createContentDto)
            .where("id = :id", { id: idContent });
        await query.execute();
        return this.getContentById(idContent);
    }
    async deleteContentById(idContent) {
        const query = this.createQueryBuilder("content")
            .delete()
            .where("id = :id", { id: idContent });
        await query.execute();
        return this.getContentById(idContent);
    }
};
ContentRepository = __decorate([
    typeorm_1.EntityRepository(content_entity_1.Content)
], ContentRepository);
exports.ContentRepository = ContentRepository;
//# sourceMappingURL=content.repository.js.map