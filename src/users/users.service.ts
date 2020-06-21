import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from './users.repository';
import { Users } from './users.entity';
import { CreateUsersDto } from './dto/create-users.dto';
// import { Cat } from './interfaces/cat.interface';

@Injectable()
export class UsersService {
   
constructor( 
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository)
    {}

    // GET
    async findAll(): Promise<Users[]> {
        return  this.usersRepository.getUsers();
    }

    async getUserById(id : number): Promise<Users> {
        return this.usersRepository.getUserById(id);
    }

    async getUserFiles(id : number): Promise<Users[]> {
        return this.usersRepository.getUserFiles(id);
    }

    // POST
    async createUsers(createUsersDto: CreateUsersDto) : Promise<Users>{
        return this.usersRepository.createUsers(createUsersDto);
    }

    // PUT
    async updateUser(id : number, createUsersDto: CreateUsersDto) : Promise<Users>{
        return this.usersRepository.updateUser(id, createUsersDto);
    }

    // DELETE
    async deleteUserById(id : number) : Promise<Users>{
        return this.usersRepository.deleteUserById(id);
    }
    
    
}
