import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Files } from "src/files/files.entity";

@Entity()
export class Users extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_name: string;

    @Column()
    token: string;

    @OneToMany(type => Files, files => files.user, {onDelete:'CASCADE'})
    files: Files[]
}