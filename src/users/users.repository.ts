import { Repository, EntityRepository } from "typeorm";
import { Users } from "./users.entity";
import { CreateUsersDto } from "./dto/create-users.dto";

@EntityRepository(Users)
export class UsersRepository extends Repository<Users>{

    async getUsers(): Promise<Users[]>{
        const query = this.createQueryBuilder("users");
        return await query.getMany();
    }

    async getUserById(id: number): Promise<Users>{
        const query = this.createQueryBuilder("users")            
        .where("users.id = :id", { id: id });
        
        return await query.getOne();     
    }

    async getUserFiles(id: number): Promise<Users[]>{
        const query = this.createQueryBuilder("users")   
        .leftJoinAndSelect("users.files", "files")         
        .leftJoinAndSelect("files.content", "content")  
        .where("users.id = :id", { id: id });
        
        return await query.getMany();     
    }

    

    async createUsers(createUsersDto: CreateUsersDto): Promise<Users>{
        const users = new Users();
        users.user_name = createUsersDto.user_name;
        users.token = createUsersDto.token;
        await users.save();
        return users;
    }

    async updateUser(idUser: number, createUsersDto: CreateUsersDto): Promise<Users>{       
        const query = this.createQueryBuilder("users")
        .update(createUsersDto)
        .where("id = :id", { id: idUser });

        await query.execute();
        return this.getUserById(idUser);              
    }

    async deleteUserById(idUser: number): Promise<Users>{
        const query = this.createQueryBuilder("users")      
        .delete()
        .where("id = :id", { id: idUser });

        await query.execute();
        return this.getUserById(idUser);         
    }      

}