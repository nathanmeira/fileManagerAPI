import { BaseEntity } from "typeorm";
import { Files } from "src/files/files.entity";
export declare class Content extends BaseEntity {
    id: number;
    content: string;
    files: Files;
}
