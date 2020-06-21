import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ContentRepository } from './content.repository';
import { Content } from './content.entity';
import { CreateContentDto } from './dto/create-content.dto';
// import { Cat } from './interfaces/cat.interface';

@Injectable()
export class ContentService {
   
constructor( 
    @InjectRepository(ContentRepository)
    private contentRepository: ContentRepository)
    {}

    async findAll(): Promise<Content[]> {
        return  this.contentRepository.getContent();
    }

    async getContentById(idContent: number): Promise<Content> {
        return  this.contentRepository.getContentById(idContent);
    }    

    async createContent(createContentDto: CreateContentDto) : Promise<Content>{
        return this.contentRepository.createContent(createContentDto);
    }

    async updateContent(idContent : number, createContentDto: CreateContentDto): Promise<Content> {
        return  this.contentRepository.updateContent(idContent, createContentDto);
    } 
    
    async deleteContentById(idContent : number): Promise<Content> {
        return  this.contentRepository.deleteContentById(idContent);
    }     
}
