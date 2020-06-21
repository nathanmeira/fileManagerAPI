import { Users } from './users.entity';
import { UsersService } from './users.service';
import { CreateUsersDto } from "./dto/create-users.dto";
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getUsers(): Promise<Users[]>;
    getUserById(id: number): Promise<Users>;
    getUserFiles(id: number): Promise<Users[]>;
    createUsers(createUsersDto: CreateUsersDto): Promise<Users>;
    UpdateUser(id: number, createUsersDto: CreateUsersDto): Promise<Users>;
    deleteUserById(id: number): Promise<Users>;
}
