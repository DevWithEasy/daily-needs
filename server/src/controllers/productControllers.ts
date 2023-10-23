import { v2 as cloudinary } from "cloudinary";
import { NextFunction, Request, Response } from "express";
import Category from "../models/Category";
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

        await Category.findByIdAndUpdate(req.body.category, {
            $push: {
                typeItems: product._id,
            },
        });

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
        const findProduct = await Product.findById(req.params.id);
        const updateDoc = {
            name: req.body.name,
            price: req.body.price,
            quantity : req.body.quantity,
            sku: req.body.sku,
            category: req.body.category,
            stock: req.body.stock,
            description: req.body.description,
            additionalInfo: req.body.description,
        };

        let product;

        if (!req.file) {
            product = await Product.findByIdAndUpdate(req.params.id, updateDoc, {
                new: true,
            });
        } else {
            const result = await cloudinary.uploader.upload(req.file.path, {
                folder: "ecommerce/products",
            });
            if (result) {
                await cloudinary.uploader.destroy(findProduct.image.public_id);
                product = await Product.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set: {
                            ...updateDoc,
                            "image.url": result.url,
                            "image.public_id": result.public_id,
                        },
                    },
                    { new: true }
                );
            }
        }

        res.json({
            success: true,
            status: 200,
            message: "Successfully product updated.",
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
        const product = await Product.findById(req.params.id)

        await Product.findByIdAndDelete(req.params.id)

        await cloudinary.uploader.destroy(product.image.public_id)

        res.json({
            success: true,
            status: 200,
            message: "Successfully product delete.",
            data: {},
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
        const product = await Product.findById(req.params.id).populate("category");

        res.json({
            success: true,
            status: 200,
            message: "Successfully product retrived.",
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
        const products = await Product.find().populate("category");

        res.json({
            success: true,
            status: 200,
            message: "Successfully product create.",
            data: products,
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
        const products = await Product.find({ category: req.params.id }).populate(
            "category"
        );

        res.json({
            success: true,
            status: 200,
            message: "Successfully product create.",
            data: products,
        });
    } catch (error) {
        next(new AppError(500, error.message));
    }
};

export const findProduct = async (
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

export const getAllHomeProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {

        const products = await Category.find({type : 'product'}).populate('typeItems','name image price sku quantity')

        res.json({
            success: true,
            status: 200,
            message: "Successfully product create.",
            data: products,
        });
    } catch (error) {
        next(new AppError(500, error.message));
    }
};