import { Repository, EntityRepository } from "typeorm";
import { Content } from "./content.entity";
import { CreateContentDto } from "./dto/create-content.dto";

@EntityRepository(Content)
export class ContentRepository extends Repository<Content>{

    async getContent(): Promise<Content[]>{
        const query = this.createQueryBuilder("content");
        return await query.getMany();
    }

    async getContentById(idContent: number): Promise<Content>{
        const query = this.createQueryBuilder("content")            
        .where("content.id = :id", { id: idContent });
        
        return await query.getOne();     
    }    

    async createContent(createContentDto: CreateContentDto): Promise<Content>{
        const content = new Content();
        content.content = createContentDto.content;
        await content.save();
        return content;
    }

    async updateContent(idContent: number, createContentDto: CreateContentDto): Promise<Content>{       
        const query = this.createQueryBuilder("content")
        .update(createContentDto)
        .where("id = :id", { id: idContent });

        await query.execute();
        return this.getContentById(idContent);              
    }

    async deleteContentById(idContent: number): Promise<Content>{
        const query = this.createQueryBuilder("content")      
        .delete()
        .where("id = :id", { id: idContent });

        await query.execute();
        return this.getContentById(idContent);         
    }   

    

    

}