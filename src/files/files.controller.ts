import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { Files } from './files.entity';
import { FilesService } from './files.service';
import { CreateFilesDto } from "./dto/create-files.dto";

@Controller('files')
export class FilesController {

    constructor(private filesService: FilesService){}
    @Get()
    getFiles() : Promise<Files[]> {
        return this.filesService.findAll();
    }

    @Get(':id')
    getFileById(@Param('id') idFile : number): Promise<Files> {
        return this.filesService.getFileById(idFile);
    }   

    @Post()
    async createFiles(@Body() createFilesDto: CreateFilesDto): Promise<Files>{
        return this.filesService.createFiles(createFilesDto);
    }

    @Put(':id')
    async UpdateFile(@Param('id') idFile : number, @Body() createFilesDto: CreateFilesDto): Promise<Files>{
        return this.filesService.UpdateFile(idFile, createFilesDto);
    }

    @Delete(':id')
    async deleteFileById(@Param('id') idFile : number) : Promise<Files>{
        return this.filesService.deleteFileById(idFile);
    }
}
