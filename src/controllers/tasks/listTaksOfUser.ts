import { Request, Response } from "express";
import { AppError, handleError } from "../../Errors/AppError";
import { listTaksOfUser_Service } from "../../services/tasks/listTaksOfUser.service";

export const listTaksOfUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await listTaksOfUser_Service(id);
        
        return res.status(200).json(result);
    } catch (err) {
        if (err instanceof AppError) {
            handleError(err, res);
        }
    }
};
