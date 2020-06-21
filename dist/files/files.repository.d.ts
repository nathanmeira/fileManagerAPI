import { Repository } from "typeorm";
import { Files } from "./files.entity";
export declare class FilesRepository extends Repository<Files> {
    getFiles(): Promise<Files[]>;
    getFileById(idFiles: number): Promise<Files>;
    UpdateFile(idFiles: number, files: Files): Promise<Files>;
    createFiles(files: Files): Promise<Files>;
    deleteFileById(idFiles: number): Promise<Files>;
}
