import { Request, Response } from "express";
import { AppError, handleError } from "../../Errors/AppError";
import { createTask_Service } from "../../services/tasks/createTask.service";

export const createTask = async (req: Request, res: Response) => {
    try {
        const { name, description, userId } = req.body;
        const result = await createTask_Service({ name, description, userId });

        return res.status(201).json(result);
    } catch (err) {
        if (err instanceof AppError) {
            handleError(err, res);
        }
    }
};
