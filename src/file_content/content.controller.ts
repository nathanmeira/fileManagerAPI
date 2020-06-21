import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { Content } from './content.entity';
import { ContentService } from './content.service';
import { CreateContentDto } from "./dto/create-content.dto";

@Controller('content')
export class ContentController {

    constructor(private contentService: ContentService){}
    @Get()
    getContent() : Promise<Content[]> {
        return this.contentService.findAll();
    }

    @Get(':id')
    getContentById(@Param('id') idContent : number): Promise<Content>{
        return this.contentService.getContentById(idContent);
    }

    @Post()
    async createContent(@Body() createContentDto: CreateContentDto): Promise<Content>{
        return this.contentService.createContent(createContentDto);
    }

    @Put(':id')
    async updateContent(@Param('id') idContent : number, @Body() createContentDto: CreateContentDto) : Promise<Content>{
        return this.contentService.updateContent(idContent, createContentDto);
    }

    @Delete(':id')
    async deleteContentById(@Param('id') id : number) : Promise<Content>{
        return this.contentService.deleteContentById(id);
    }
}
