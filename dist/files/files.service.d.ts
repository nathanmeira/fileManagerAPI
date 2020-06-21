import { FilesRepository } from './files.repository';
import { Files } from './files.entity';
import { CreateFilesDto } from './dto/create-files.dto';
import { UsersRepository } from 'src/users/users.repository';
import { ContentRepository } from 'src/file_content/content.repository';
export declare class FilesService {
    private filesRepository;
    private userRespository;
    private contentRespository;
    constructor(filesRepository: FilesRepository, userRespository: UsersRepository, contentRespository: ContentRepository);
    findAll(): Promise<Files[]>;
    getFileById(idFile: number): Promise<Files>;
    UpdateFile(idFile: number, createFilesDto: CreateFilesDto): Promise<Files>;
    createFiles(createFilesDto: CreateFilesDto): Promise<Files>;
    deleteFileById(idFile: number): Promise<Files>;
}
