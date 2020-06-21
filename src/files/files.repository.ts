import { Repository, EntityRepository } from "typeorm";
import { Files } from "./files.entity";
import { CreateFilesDto } from "./dto/create-files.dto";

@EntityRepository(Files)
export class FilesRepository extends Repository<Files>{

    async getFiles(): Promise<Files[]>{
        const query = this.createQueryBuilder("files")
            .leftJoinAndSelect("files.user", "users")         
            .leftJoinAndSelect("files.content", "content")  ;
        return await query.getMany();
    }

    async getFileById(idFiles: number): Promise<Files>{
        const query = this.createQueryBuilder("files")            
        .where("files.id = :id", { id: idFiles });
        
        return await query.getOne();     
    }

    async UpdateFile(idFiles: number, files: Files): Promise<Files>{       
        const query = this.createQueryBuilder("files")
        .update(files)
        .where("id = :id", { id: idFiles });

        await query.execute();
        return this.getFileById(idFiles);              
    }    

    async createFiles(files: Files): Promise<Files>{       
        await files.save();
        return files;
    }

    async deleteFileById(idFiles: number): Promise<Files>{
        const query = this.createQueryBuilder("files")      
        .delete()
        .where("id = :id", { id: idFiles });

        await query.execute();
        return this.getFileById(idFiles);         
    }      

    

}