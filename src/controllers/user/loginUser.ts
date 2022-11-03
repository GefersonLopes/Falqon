import { Request, Response } from "express";
import { AppError, handleError } from "../../Errors/AppError";
import { loginUser_Service } from "../../services/user/loginUser.service";

export const loginUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const result = await loginUser_Service({ email, password });

        return res.status(200).json(result);
    } catch (err) {
        if (err instanceof AppError) {
            handleError(err, res);
        }
    }
};
