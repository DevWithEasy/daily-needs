import { NextFunction, Request, Response } from "express";
import SSLCommerzPayment from "sslcommerz-lts";
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

        const order = await newOrder.save();

        const store_id = process.env.STORE_ID;

        const store_passwd = process.env.PASSWORD;

        const is_live = false;

        const data = {
            total_amount: 100,
            currency: "BDT",
            tran_id: order._id,
            success_url: `http://localhost:3000/success/${order._id}`,
            fail_url: `http://localhost:3000/fail/${order._id}`,
            cancel_url: `http://localhost:3000/cancel/${order._id}`,
            ipn_url: "http://localhost:3000/ipn",
            shipping_method: "Courier",
            product_name: "Computer.",
            product_category: "Electronic",
            product_profile: "general",
            cus_name: "Customer Name",
            cus_email: "customer@example.com",
            cus_add1: "Dhaka",
            cus_add2: "Dhaka",
            cus_city: "Dhaka",
            cus_state: "Dhaka",
            cus_postcode: "1000",
            cus_country: "Bangladesh",
            cus_phone: "01711111111",
            cus_fax: "01711111111",
            ship_name: "Customer Name",
            ship_add1: "Dhaka",
            ship_add2: "Dhaka",
            ship_city: "Dhaka",
            ship_state: "Dhaka",
            ship_postcode: 1000,
            ship_country: "Bangladesh",
        };
        const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
        sslcz.init(data).then((apiResponse: any) => {
            let GatewayPageURL = apiResponse.GatewayPageURL;
            console.log("Redirecting to: ", GatewayPageURL);
        });

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
