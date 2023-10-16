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

const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: 'ecommerce/products'
        })

        let product

        if(!req.file){
            product = await Product.findByIdAndUpdate(req.params.id,{
                name : req.body.name,
                price : req.body.price,
                sku : req.body.sku,
                category : req.body.category,
                description : req.body.description,
                additionalInfo : req.body.description,
        })
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
}

const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
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

const getSingleProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const product = await Product.findById(req.params.id)

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

const getAllProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const product = await Product.find()

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

const getProductByCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const product = await Product.find({category : req.params.id})

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

const findProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const product = await Product.find({category : req.params.id})

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

export { createProduct,updateProduct,deleteProduct,getSingleProduct,getAllProduct,getProductByCategory,findProduct }