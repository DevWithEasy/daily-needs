import axios from "axios";
import { NextFunction, Request, Response } from "express";
import IAuthRequest from "../interface/authentication";
import Order from "../models/Order";
import AppError from "../utils/AppError";

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

        const formData = {
            cus_name: req.body.name,
            cus_email: req.body.email,
            cus_phone: req.body.phone,
            amount: req.body.bill,
            tran_id: newOrder._id,
            signature_key: "dbb74894e82415a2f7ff0ec3a97e4183",
            store_id: "aamarpaytest",
            currency: "BDT",
            desc: "dafsdfhfasdhfasifhasf",
            cus_add1: "53, Gausul Azam Road, Sector-14, Dhaka, Bangladesh",
            cus_add2: "Dhaka",
            cus_city: "Dhaka",
            cus_country: "Bangladesh",
            success_url: `http://localhost:3000/success/${newOrder._id}`,
            fail_url: `http://localhost:3000/failed/${newOrder._id}`,
            cancel_url: `http://localhost:3000/cancel/${newOrder._id}`,
            type: "json",
        };
        const { data } = await axios.post(
            "https://sandbox.aamarpay.com/jsonpost.php",
            formData
        );

        if (data.result === "true") {
            await newOrder.save();
            res.json({
                success: true,
                status: 200,
                message: "Successfully product create.",
                url: data.payment_url,
            });
        } else {
            next(new AppError(500, "Payment error."));
        }
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
        console.log(req.params)
        res.json({
            success: true,
            status: 200,
            message: "Successfully product deleted.",
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
