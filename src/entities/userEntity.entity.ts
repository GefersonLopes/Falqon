import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Tasks } from "./tasksEntity.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(() => Tasks, tasks => tasks.user)
    tasks: Tasks[];
};
