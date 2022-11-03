import { AppDataSource } from "../../data-source";
import { Tasks } from "../../entities/tasksEntity.entity";
import { User } from "../../entities/userEntity.entity";
import { AppError } from "../../Errors/AppError";
import { IRequestCreateTasks, IResponseTasks } from "../../interfaces/tasks";

export const createTask_Service = async ({
    name,
    description,
    userId
}: IRequestCreateTasks): Promise<IResponseTasks> => {

    if(!name || !description) {
        throw new AppError(400, "Data is required");
    };
    if(name.length === 0 || description.length === 0) {
        throw new AppError(400, "Data is required");
    };

    const tasksRepository = AppDataSource.getRepository(Tasks);
    const userRepository = AppDataSource.getRepository(User);

    const users = await userRepository.find();
    const verifyUser = users.find(u => u.id === userId);
    if(!verifyUser) {
        throw new AppError(404, "id of user not found");
    }

    const user = await userRepository.findOne({
        where: {id: userId}
    });
    if(!user) {
        throw new AppError(404, "id of user not found");
    }

    const newTask = new Tasks();
    newTask.name = name;
    newTask.description = description;
    newTask.user = user
    
    await tasksRepository.save(newTask);
    tasksRepository.create(newTask);

    const createdTask = {
        id: newTask.id,
        name: newTask.name,
        description: newTask.description
    };

    return createdTask;
};
