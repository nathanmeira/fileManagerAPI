import { BaseEntity } from "typeorm";
export declare class Users extends BaseEntity {
    id: number;
    user_name: string;
    token: string;
}
