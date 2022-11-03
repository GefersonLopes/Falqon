import { Response } from "express";

export class AppError extends Error {
    status;
    constructor(status: number, message: string) {
        super();
        this.message = message;
        this.status = status;
    }
};

export const handleError = (err: AppError, res: Response) => {

    const { status, message } = err
  
    return res.status(status).json({
        message
    })
  }