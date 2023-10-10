import { NextFunction, Request,Response } from "express";
import AppError from "../utils/AppError";
import bcrypt from 'bcrypt'
import User from "../models/User";

const signup =async(req : Request,res : Response,next : NextFunction) => {
    try {
        const hashed = await bcrypt.hash(req.body.password,10)
        const newUser = new User({
            ...req.body,
            password : hashed
        })
        const user = await newUser.save()
        return res.json({
            success : true,
            status : 200,
            data : user
        })
    } catch (error) {
        next(new AppError(500,'Inernel server Error'))
    }
}

const signin =async(req : Request,res : Response,next : NextFunction) => {
    try {
        
    } catch (error) {
        next(new AppError(500,'Inernel server Error'))
    }
}

const getProfile =async(req : Request,res : Response,next : NextFunction) => {
    try {
        res.json({
            message : 'hello'
        })
    } catch (error) {
        next(new AppError(500,'Inernel server Error'))
    }
}

const updateProfile =async(req : Request,res : Response,next : NextFunction) => {
    try {
        
    } catch (error) {
        next(new AppError(500,'Inernel server Error'))
    }
}

export {signup,signin,updateProfile,getProfile}