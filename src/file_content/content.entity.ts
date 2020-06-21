import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Files } from "src/files/files.entity";

@Entity()
export class Content extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;

    @OneToOne(type => Files, {onDelete:'CASCADE'})
    files: Files;


}