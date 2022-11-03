import { AppDataSource } from "../../data-source";
import { Tasks } from "../../entities/tasksEntity.entity";
import { AppError } from "../../Errors/AppError";
import { IRequestTasks } from "../../interfaces/tasks";

export const updateTask_Services = async (
    id: string,
    { name, description }: IRequestTasks
): Promise<IRequestTasks> => {

    const taskRepository = AppDataSource.getRepository(Tasks);
    const tasks = await taskRepository.find();

    const verify = tasks.find((task) => task.id === id);
    if (!verify) {
        throw new AppError(404, "id not found");
    }

    const task = await taskRepository.findOne({
        where: { id: id },
    });
    if (!task) {
        throw new AppError(404, "task not found");
    }

    task.name = name ? name : task.name;
    task.description = description ? description : task.description;

    await taskRepository.save(task);

    return task;
};
