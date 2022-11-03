import { AppDataSource } from "../../data-source";
import { Tasks } from "../../entities/tasksEntity.entity";
import { IResponseTasks } from "../../interfaces/tasks";

export const listTask_Services = async (): Promise<IResponseTasks[]> => {
    const taskRepository = AppDataSource.getRepository(Tasks);
    const tasks = await taskRepository.find();

    return tasks;
};