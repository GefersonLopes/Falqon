import { Request, Response } from "express";
import { AppError, handleError } from "../../Errors/AppError";
import { listTask_Services } from "../../services/tasks/listTask.service";

export const listTask = async (req: Request, res: Response) => {
    try {
        const result = await listTask_Services();

        return res.status(200).json(result);
    } catch (err) {
        if (err instanceof AppError) {
            handleError(err, res);
        }
    }
};
