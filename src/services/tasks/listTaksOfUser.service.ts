import { AppDataSource } from "../../data-source";
import { User } from "../../entities/userEntity.entity";
import { AppError } from "../../Errors/AppError";
import { IResponseTasks } from "../../interfaces/tasks";

export const listTaksOfUser_Service = async (id: string): Promise<IResponseTasks[]> => {
    const taskRepository = AppDataSource.getRepository(User);
    const tasks = await taskRepository.find();

    const verifyTask = tasks.find(task => task.id === id);
    if(!verifyTask) {
        throw new AppError(404, "id not found");
    }

    const taskInUser = await taskRepository.findOne({
        where: {id: id},
        relations: {tasks: true},
    });

    return taskInUser!.tasks;
};
