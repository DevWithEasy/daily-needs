import { NextFunction, Request } from "express";
import * as jwt from 'jsonwebtoken'
import AppError from "../utils/AppError";

interface CustomRequest extends Request {
    user: string;
}

const authenticated = async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
        const token = req.headers['authorization'].split(' ')[1]
        if (!token) {
            return next(new AppError(401, 'Authentication failed.'));
        }

        jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
            if (err) {
                next(new AppError(401, 'Authentication failed.'))
            } else {
                const decodeUser = decode as { id: string }
                req.user = decodeUser.id
                next()
            }
        })

    } catch (error) {
        next(new AppError(500, 'Internal Server Error'))
    }
}