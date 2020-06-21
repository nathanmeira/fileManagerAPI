import { Repository } from "typeorm";
import { Users } from "./users.entity";
import { CreateUsersDto } from "./dto/create-users.dto";
export declare class UsersRepository extends Repository<Users> {
    getUsers(): Promise<Users[]>;
    getUserById(id: number): Promise<Users>;
    getUserFiles(id: number): Promise<Users[]>;
    createUsers(createUsersDto: CreateUsersDto): Promise<Users>;
    updateUser(idUser: number, createUsersDto: CreateUsersDto): Promise<Users>;
    deleteUserById(idUser: number): Promise<Users>;
}
