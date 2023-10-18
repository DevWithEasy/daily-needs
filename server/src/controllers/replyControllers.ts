import { NextFunction, Request, Response } from "express";
import AppError from "../utils/AppError";

export const createReply = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        res.json({
            success: true,
            status: 200,
            message: "Successfully product create.",
            data: "",
        });
    } catch (error) {
        next(new AppError(500, error.message));
    }
};

export const updateReply = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        res.json({
            success: true,
            status: 200,
            message: "Successfully product create.",
            data: "",
        });
    } catch (error) {
        next(new AppError(500, error.message));
    }
};

export const deleteReply = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        res.json({
            success: true,
            status: 200,
            message: "Successfully product create.",
            data: "",
        });
    } catch (error) {
        next(new AppError(500, error.message));
    }
};

export const getReply = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        res.json({
            success: true,
            status: 200,
            message: "Successfully product create.",
            data: "",
        });
    } catch (error) {
        next(new AppError(500, error.message));
    }
};
