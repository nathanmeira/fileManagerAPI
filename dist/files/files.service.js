"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const files_repository_1 = require("./files.repository");
const files_entity_1 = require("./files.entity");
const users_repository_1 = require("../users/users.repository");
const users_entity_1 = require("../users/users.entity");
const content_repository_1 = require("../file_content/content.repository");
const content_entity_1 = require("../file_content/content.entity");
let FilesService = class FilesService {
    constructor(filesRepository, userRespository, contentRespository) {
        this.filesRepository = filesRepository;
        this.userRespository = userRespository;
        this.contentRespository = contentRespository;
    }
    async findAll() {
        return this.filesRepository.getFiles();
    }
    async getFileById(idFile) {
        return this.filesRepository.getFileById(idFile);
    }
    async UpdateFile(idFile, createFilesDto) {
        const file = new files_entity_1.Files();
        file.file_name = createFilesDto.file_name;
        file.file_path = createFilesDto.file_path;
        return this.filesRepository.UpdateFile(idFile, file);
    }
    async createFiles(createFilesDto) {
        const users = await this.userRespository.getUserById(createFilesDto.userId);
        const content = new content_entity_1.Content();
        content.content = createFilesDto.content;
        const contentSave = await this.contentRespository.createContent(content);
        const files = new files_entity_1.Files();
        files.file_name = createFilesDto.file_name;
        files.file_path = createFilesDto.file_path;
        files.user = users;
        files.content = contentSave;
        return this.filesRepository.createFiles(files);
    }
    async deleteFileById(idFile) {
        return this.filesRepository.deleteFileById(idFile);
    }
};
FilesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(files_repository_1.FilesRepository)),
    __param(1, typeorm_1.InjectRepository(users_repository_1.UsersRepository)),
    __param(2, typeorm_1.InjectRepository(content_repository_1.ContentRepository)),
    __metadata("design:paramtypes", [files_repository_1.FilesRepository,
        users_repository_1.UsersRepository,
        content_repository_1.ContentRepository])
], FilesService);
exports.FilesService = FilesService;
//# sourceMappingURL=files.service.js.map