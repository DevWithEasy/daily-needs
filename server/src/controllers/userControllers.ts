import bcrypt from "bcrypt";
import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import IAuthRequest from "../interface/authentication";
import User from "../models/User";
import AppError from "../utils/AppError";
import verifyCode from "../utils/verifyCode";
import Verification from "../models/Verification";

const signup = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const hashed = await bcrypt.hash(req.body.password, 10);

        const newUser = new User({
            ...req.body,
            password: hashed,
        });

        const user = await newUser.save();

        const code = await bcrypt.hash(verifyCode(),10)

        const newVerification = new Verification({
            user : user._id,
            code : code
        })

        await newVerification.save()

        return res.json({
            success: true,
            status: 200,
            data: user,
        });

    } catch (error) {
        next(new AppError(500, error.message));
    }
};

const signin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await User.findOne({
            $or: [{ email: req.body.email }, { phone: req.body.phone }],
        });
        if (!user) {
            return next(new AppError(404, "Account not found."));
        }
        const isValid = await bcrypt.compare(req.body.password, user.password);
        if (!isValid) {
            return next(new AppError(401, "Access denied. Wrong credentials"));
        }
        const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        return res.json({
            success: true,
            status: 200,
            token: token,
            data: user,
        });
    } catch (error) {
        next(new AppError(500, "Inernel server Error"));
    }
};

const getProfile = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await User.findById(req.params.id);
        return res.json({
            success: true,
            status: 200,
            data: user,
        });
    } catch (error) {
        next(new AppError(500, "Inernel server Error"));
    }
};

const updateProfile = async (req: IAuthRequest,res: Response,next: NextFunction) => {
    try {
        const user = await User.findByIdAndUpdate(req.user, {
            $set: {
                name: req.body.name,
                "address.area": req.body.area,
                "address.postOffice": req.body.postOffice,
                "address.upazilla": req.body.upazilla,
                "address.district": req.body.district,
            },
        });
        return res.json({
            success: true,
            status: 200,
            data: user,
        });
    } catch (error) {
        next(new AppError(500, "Inernel server Error"));
    }
};

const findAccount = async (req: IAuthRequest,res: Response,next: NextFunction) => {
    try {
        
        return res.json({
            success: true,
            status: 200,
            data: 'user',
        });
    } catch (error) {
        next(new AppError(500, "Inernel server Error"));
    }
};

const verifyAccount = async (req: IAuthRequest,res: Response,next: NextFunction) => {
    try {
        
        return res.json({
            success: true,
            status: 200,
            data: 'user',
        });
    } catch (error) {
        next(new AppError(500, "Inernel server Error"));
    }
};

const forgetAccount = async (req: IAuthRequest,res: Response,next: NextFunction) => {
    try {
        
        return res.json({
            success: true,
            status: 200,
            data: 'user',
        });
    } catch (error) {
        next(new AppError(500, "Inernel server Error"));
    }
};

const forgetVerifyAccount = async (req: IAuthRequest,res: Response,next: NextFunction) => {
    try {
        
        return res.json({
            success: true,
            status: 200,
            data: 'user',
        });
    } catch (error) {
        next(new AppError(500, "Inernel server Error"));
    }
};

const changeEmailAccount = async (req: IAuthRequest,res: Response,next: NextFunction) => {
    try {
        
        return res.json({
            success: true,
            status: 200,
            data: 'user',
        });
    } catch (error) {
        next(new AppError(500, "Inernel server Error"));
    }
};

const changePhoneAccount = async (req: IAuthRequest,res: Response,next: NextFunction) => {
    try {
        
        return res.json({
            success: true,
            status: 200,
            data: 'user',
        });
    } catch (error) {
        next(new AppError(500, "Inernel server Error"));
    }
};

const changeImageAccount = async (req: IAuthRequest,res: Response,next: NextFunction) => {
    try {
        
        return res.json({
            success: true,
            status: 200,
            data: 'user',
        });
    } catch (error) {
        next(new AppError(500, "Inernel server Error"));
    }
};

export { getProfile, signin, signup, updateProfile,findAccount,verifyAccount,forgetAccount,forgetVerifyAccount,changeImageAccount,changeEmailAccount,changePhoneAccount };
