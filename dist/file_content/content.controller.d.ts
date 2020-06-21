import { Content } from './content.entity';
import { ContentService } from './content.service';
import { CreateContentDto } from "./dto/create-content.dto";
export declare class ContentController {
    private contentService;
    constructor(contentService: ContentService);
    getContent(): Promise<Content[]>;
    getContentById(idContent: number): Promise<Content>;
    createContent(createContentDto: CreateContentDto): Promise<Content>;
    updateContent(idContent: number, createContentDto: CreateContentDto): Promise<Content>;
    deleteContentById(id: number): Promise<Content>;
}
