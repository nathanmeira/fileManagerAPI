import { UsersRepository } from './users.repository';
import { Users } from './users.entity';
import { CreateUsersDto } from './dto/create-users.dto';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: UsersRepository);
    findAll(): Promise<Users[]>;
    getUserById(id: number): Promise<Users>;
    getUserFiles(id: number): Promise<Users[]>;
    createUsers(createUsersDto: CreateUsersDto): Promise<Users>;
    updateUser(id: number, createUsersDto: CreateUsersDto): Promise<Users>;
    deleteUserById(id: number): Promise<Users>;
}
