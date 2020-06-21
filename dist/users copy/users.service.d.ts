import { UsersRepository } from './users.repository';
import { Users } from './users.entity';
import { CreateUsersDto } from './dto/create-users.dto';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: UsersRepository);
    findAll(): Promise<Users[]>;
    createTask(createUsersDto: CreateUsersDto): Promise<Users>;
}
