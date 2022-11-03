import { AppDataSource } from "../../data-source";
import { Tasks } from "../../entities/tasksEntity.entity";
import { AppError } from "../../Errors/AppError";

export const deleteTask_Services = async (id: string): Promise<void> => {
    const taskRepository = AppDataSource.getRepository(Tasks);
    const tasks = await taskRepository.find();
    
    const verifyTask = tasks.find((task) => task.id === id);
    if (!verifyTask) {
        throw new AppError(404, "id not found");
    }

    const task = await taskRepository.findOne({
        where: {id: id},
    });

    if(!task) {
        throw new AppError(404, "task not found");
    };

    await taskRepository.delete({ id: id });
};