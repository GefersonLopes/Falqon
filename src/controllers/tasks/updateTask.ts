import { Request, Response } from "express";
import { AppError, handleError } from "../../Errors/AppError";
import { updateTask_Services } from "../../services/tasks/updateTask.service";

export const updateTask = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, description } = req.body;
        const result = await updateTask_Services(id, { name, description });

        return res.status(200).json(result);
    } catch (err) {
        if (err instanceof AppError) {
            handleError(err, res);
        }
    }
};
