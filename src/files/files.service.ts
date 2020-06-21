import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FilesRepository } from './files.repository';
import { Files } from './files.entity';
import { CreateFilesDto } from './dto/create-files.dto';
import { UsersRepository } from 'src/users/users.repository';
import { Users } from 'src/users/users.entity';
import { ContentRepository } from 'src/file_content/content.repository';
import { Content } from 'src/file_content/content.entity';
// import { Cat } from './interfaces/cat.interface';

@Injectable()
export class FilesService {
   
constructor( 
    @InjectRepository(FilesRepository)
    private filesRepository: FilesRepository,
    @InjectRepository(UsersRepository)
    private userRespository: UsersRepository,
    @InjectRepository(ContentRepository)
    private contentRespository: ContentRepository
    )
    {}

    async findAll(): Promise<Files[]> {
        return  this.filesRepository.getFiles();
    }

    async getFileById(idFile: number): Promise<Files> {
        return  this.filesRepository.getFileById(idFile);
    }  

    async UpdateFile(idFile: number, createFilesDto: CreateFilesDto): Promise<Files> {
        const file = new Files();
        file.file_name = createFilesDto.file_name;
        file.file_path = createFilesDto.file_path;
        return  this.filesRepository.UpdateFile(idFile, file);
    }      
  
    async createFiles(createFilesDto: CreateFilesDto) : Promise<Files>{
        const users = await this.userRespository.getUserById(createFilesDto.userId);
        const content = new Content();
        content.content = createFilesDto.content;
        
        const contentSave = await this.contentRespository.createContent(content);

        const files = new Files();
        files.file_name = createFilesDto.file_name;
        files.file_path = createFilesDto.file_path;
        files.user = users;
        files.content = contentSave;
        return this.filesRepository.createFiles(files);
    }

    async deleteFileById(idFile: number) : Promise<Files>{
        return this.filesRepository.deleteFileById(idFile);
    }

}
