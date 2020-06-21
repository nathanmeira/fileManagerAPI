import { Users } from './users.entity';
import { UsersService } from './users.service';
import { CreateUsersDto } from "./dto/create-users.dto";
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getTasks(): Promise<Users[]>;
    createTask(createUsersDto: CreateUsersDto): Promise<Users>;
}
