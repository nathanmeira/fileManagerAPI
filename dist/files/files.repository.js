"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const files_entity_1 = require("./files.entity");
let FilesRepository = class FilesRepository extends typeorm_1.Repository {
    async getFiles() {
        const query = this.createQueryBuilder("files");
        return await query.getMany();
    }
    async getFileById(idFiles) {
        const query = this.createQueryBuilder("files")
            .where("files.id = :id", { id: idFiles });
        return await query.getOne();
    }
    async UpdateFile(idFiles, files) {
        const query = this.createQueryBuilder("files")
            .update(files)
            .where("id = :id", { id: idFiles });
        await query.execute();
        return this.getFileById(idFiles);
    }
    async createFiles(files) {
        await files.save();
        return files;
    }
    async deleteFileById(idFiles) {
        const query = this.createQueryBuilder("files")
            .delete()
            .where("id = :id", { id: idFiles });
        await query.execute();
        return this.getFileById(idFiles);
    }
};
FilesRepository = __decorate([
    typeorm_1.EntityRepository(files_entity_1.Files)
], FilesRepository);
exports.FilesRepository = FilesRepository;
//# sourceMappingURL=files.repository.js.map