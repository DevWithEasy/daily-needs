import { NextFunction, Request, Response } from "express";
import * as jwt from 'jsonwebtoken';
import AppError from "../utils/AppError";
import IAuthRequest from "../interface/authentication";

const authenticated = async (req: IAuthRequest, res: Response, next: NextFunction) => {
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

export default authenticated