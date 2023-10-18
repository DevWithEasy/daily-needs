import { NextFunction, Request, Response } from "express";
import AppError from "../utils/AppError";
import Category from "../models/Category";

export const createCategory = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const newCategory = new Category({
            name : req.body.name,
            type : req.body.type
        })
        const category = await newCategory.save()
        res.json({
            success: true,
            status: 200,
            message: "Successfully product create.",
            data: category,
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
        const category = await Category.findByIdAndUpdate(req.params.id,{
            'name' : req.body.name,
            'type' : req.body.type
        })
        res.json({
            success: true,
            status: 200,
            message: "Successfully category updated.",
            data: category
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
        await Category.findByIdAndDelete(req.params.id)
        res.json({
            success: true,
            status: 200,
            message: "Successfully category deleted.",
            data: "",
        });
    } catch (error) {
        next(new AppError(500, error.message));
    }
};

export const getCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const category = await Category.findById(req.params.id).populate('typeItems')
        res.json({
            success: true,
            status: 200,
            message: "Successfully category retrived.",
            data: category,
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
        const categories = await Category.find().populate('typeItems')
        res.json({
            success: true,
            status: 200,
            message: "Successfully categories retrived.",
            data: categories,
        });
    } catch (error) {
        next(new AppError(500, error.message));
    }
};

