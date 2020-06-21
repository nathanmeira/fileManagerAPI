import { Files } from './files.entity';
import { FilesService } from './files.service';
import { CreateFilesDto } from "./dto/create-files.dto";
export declare class FilesController {
    private filesService;
    constructor(filesService: FilesService);
    getFiles(): Promise<Files[]>;
    getFileById(idFile: number): Promise<Files>;
    createFiles(createFilesDto: CreateFilesDto): Promise<Files>;
    UpdateFile(idFile: number, createFilesDto: CreateFilesDto): Promise<Files>;
    deleteFileById(idFile: number): Promise<Files>;
}
