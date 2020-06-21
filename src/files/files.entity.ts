import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne, ManyToOne } from "typeorm";
import { Users } from "src/users/users.entity";
import { Content } from "src/file_content/content.entity";

@Entity()
export class Files extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    file_name: string;

    @Column()
    file_path: string;

    @ManyToOne(type => Users, user => user.files, {onDelete:'CASCADE'})
    user: Users;

    @OneToOne(type => Content, {onDelete:'CASCADE'})
    @JoinColumn()
    content: Content;

}