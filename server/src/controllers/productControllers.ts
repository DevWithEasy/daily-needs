import { NextFunction, Request, Response } from "express";
import AppError from "../utils/AppError";
import { v2 as cloudinary } from 'cloudinary'
import Product from "../models/Product";

const createProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: 'ecommerce/products'
        })

        const newProduct = new Product({
            ...req.body,
            image: {
                url: result.url,
                public_id: result.public_id
            }
        })

        const product = await newProduct.save()

        res.json({
            success: true,
            status: 200,
            message: "Successfully product create.",
            data: product,
        });

    } catch (error) {
        next(new AppError(500, error.message));
    }
}

export { createProduct }