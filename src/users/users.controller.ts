import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { Users } from './users.entity';
import { UsersService } from './users.service';
import { CreateUsersDto } from "./dto/create-users.dto";

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService){}
    @Get()
    getUsers() : Promise<Users[]> {
        return this.usersService.findAll();
    }

    @Get(':id')
    async getUserById(@Param('id') id : number) : Promise<Users>{
        return this.usersService.getUserById(id);
    }

    @Get('/files/:id')
    async getUserFiles(@Param('id') id : number) : Promise<Users[]>{
        return this.usersService.getUserFiles(id);
    }

    @Post()
    async createUsers(@Body() createUsersDto: CreateUsersDto): Promise<Users>{
        return this.usersService.createUsers(createUsersDto);
    }

    @Put(':id')
    async UpdateUser(@Param('id') id : number, @Body() createUsersDto: CreateUsersDto) : Promise<Users>{
        return this.usersService.updateUser(id, createUsersDto);
    }

    @Delete(':id')
    async deleteUserById(@Param('id') id : number) : Promise<Users>{
        return this.usersService.deleteUserById(id);
    }
}
