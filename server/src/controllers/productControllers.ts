import { v2 as cloudinary } from "cloudinary";
import { NextFunction, Request, Response } from "express";
import Product from "../models/Product";
import AppError from "../utils/AppError";

export const createProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: "ecommerce/products",
        });

        const newProduct = new Product({
            ...req.body,
            image: {
                url: result.url,
                public_id: result.public_id,
            },
        });

        const product = await newProduct.save();

        res.json({
            success: true,
            status: 200,
            message: "Successfully product create.",
            data: product,
        });
    } catch (error) {
        next(new AppError(500, error.message));
    }
};

export const updateProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: "ecommerce/products",
        });

        let product;

        if (!req.file) {
            product = await Product.findByIdAndUpdate(req.params.id, {
                name: req.body.name,
                price: req.body.price,
                sku: req.body.sku,
                category: req.body.category,
                description: req.body.description,
                additionalInfo: req.body.description,
            });
        }

        res.json({
            success: true,
            status: 200,
            message: "Successfully product create.",
            data: product,
        });
    } catch (error) {
        next(new AppError(500, error.message));
    }
};

export const deleteProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: "ecommerce/products",
        });

        const newProduct = new Product({
            ...req.body,
            image: {
                url: result.url,
                public_id: result.public_id,
            },
        });

        const product = await newProduct.save();

        res.json({
            success: true,
            status: 200,
            message: "Successfully product create.",
            data: product,
        });
    } catch (error) {
        next(new AppError(500, error.message));
    }
};

export const getSingleProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const product = await Product.findById(req.params.id);

        res.json({
            success: true,
            status: 200,
            message: "Successfully product create.",
            data: product,
        });
    } catch (error) {
        next(new AppError(500, error.message));
    }
};

export const getAllProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const product = await Product.find();

        res.json({
            success: true,
            status: 200,
            message: "Successfully product create.",
            data: product,
        });
    } catch (error) {
        next(new AppError(500, error.message));
    }
};

export const getProductByCategory = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const product = await Product.find({ category: req.params.id });

        res.json({
            success: true,
            status: 200,
            message: "Successfully product create.",
            data: product,
        });
    } catch (error) {
        next(new AppError(500, error.message));
    }
};

export const findProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const product = await Product.find({ category: req.params.id });

        res.json({
            success: true,
            status: 200,
            message: "Successfully product create.",
            data: product,
        });
    } catch (error) {
        next(new AppError(500, error.message));
    }
};
