import { NextFunction, Request, Response } from "express";
import AppError from "../utils/AppError";

export const createCategory = async (
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

export const updateCategory = async (
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

export const deleteCategory = async (
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

export const getCategory = async (req: Request, res: Response, next: NextFunction) => {
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

export const getAllCategory = async (
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

