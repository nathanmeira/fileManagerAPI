import { BaseEntity } from "typeorm";
import { Files } from "src/files/files.entity";
export declare class Users extends BaseEntity {
    id: number;
    user_name: string;
    token: string;
    files: Files[];
}
