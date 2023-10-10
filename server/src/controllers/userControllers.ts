import { NextFunction, Request } from "express";
import AppError from "../utils/AppError";

const signup=(req : Request,res : Response,next : NextFunction) => {
    try {
        
    } catch (error) {
        next(new AppError(500,'Inernel server Error'))
    }
}

const signin=(req : Request,res : Response,next : NextFunction) => {
    try {
        
    } catch (error) {
        next(new AppError(500,'Inernel server Error'))
    }
}

export {signup,signin}