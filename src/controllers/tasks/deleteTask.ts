import { Request, Response } from "express";
import { AppError, handleError } from "../../Errors/AppError";
import { deleteTask_Services } from "../../services/tasks/deleteTask.service";

export const deleteTask = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await deleteTask_Services(id);

        return res.status(200).json(result);
    } catch (err) {
        if (err instanceof AppError) {
            handleError(err, res);
        }
    }
};
