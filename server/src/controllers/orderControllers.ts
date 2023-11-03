import { NextFunction, Request, Response } from "express";
import IAuthRequest from "../interface/authentication";
import Order from "../models/Order";
import AppError from "../utils/AppError";

// Add the following line above the module import
declare const SSLCommerzPayment: any;


export const createOrder = async (
    req: IAuthRequest,
    res: Response,
    next: NextFunction
) => {
    try {
        const newOrder = new Order({
            user: req.user,
            ...req.body,
            status: [
                {
                    date: Date.now(),
                    status: "Your order placed successfully.",
                },
            ],
        });

        const order = await newOrder.save();

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

export const updateOrder = async (
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

export const deleteOrder = async (
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

export const getOrder = async (
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

export const getAllOrder = async (
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

export const getAllOrderByUser = async (
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
