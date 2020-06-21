import { BaseEntity } from "typeorm";
import { Users } from "src/users/users.entity";
import { Content } from "src/file_content/content.entity";
export declare class Files extends BaseEntity {
    id: number;
    file_name: string;
    file_path: string;
    user: Users;
    content: Content;
}
