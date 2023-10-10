import { Request, Response, NextFunction } from 'express';
import { Application } from 'express-serve-static-core';
import AppError from '../utils/AppError';
const errorHandler = (app: Application) => {
    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        console.log(err.stack)
        const status = err instanceof AppError ? err.statusCode : 500;
        const message = err.message || 'Internal sever error'
        return res.status(status).json({
            success : false,
            status : status,
            message: message 
        })
    })
}

export default errorHandler