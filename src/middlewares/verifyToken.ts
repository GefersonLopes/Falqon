import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const verifyToken = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    
    let token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: "not authorized" });
    }
    token = token.split(" ")[1];

    jwt.verify(
        token,
        "abcdefghijklmnopqrstuvwxyz",
        (err: any, decoded: any) => {
            if (err) {
                return res.status(401).json({ message: err.message });
            }
            req.user = {
                id: decoded.id,
            };

            next();
        }
    );
};
