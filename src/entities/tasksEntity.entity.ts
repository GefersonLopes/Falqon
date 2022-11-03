import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./userEntity.entity";

@Entity()
export class Tasks {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @ManyToOne(() => User, user => user.tasks)
    user: User;
}