import { Repository } from "typeorm";
import { Users } from "./users.entity";
import { CreateUsersDto } from "./dto/create-users.dto";
export declare class UsersRepository extends Repository<Users> {
    getTasks(): Promise<Users[]>;
    createTask(createUsersDto: CreateUsersDto): Promise<Users>;
}
