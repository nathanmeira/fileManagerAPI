import { Repository } from "typeorm";
import { Content } from "./content.entity";
import { CreateContentDto } from "./dto/create-content.dto";
export declare class ContentRepository extends Repository<Content> {
    getContent(): Promise<Content[]>;
    getContentById(idContent: number): Promise<Content>;
    createContent(createContentDto: CreateContentDto): Promise<Content>;
    updateContent(idContent: number, createContentDto: CreateContentDto): Promise<Content>;
    deleteContentById(idContent: number): Promise<Content>;
}
