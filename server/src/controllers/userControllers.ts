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
        
        const code = verifyCode()
        const hashcode = await bcrypt.hash(code,10)

        const newVerification = new Verification({
            user : user._id,
            code : hashcode
        })

        await newVerification.save()

        return res.json({
            success: true,
            status: 200,
            message : 'Successfully signup.',
            data: {}
        });

    } catch (error) {
        next(new AppError(500, error.message));
    }
};

const signin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await User.findOne({
            $or: [{ email: req.body.email }, { phone: req.body.email }],
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
            message : 'Successfully signin.',
            token: token,
            data: user,
        });
    } catch (error) {
        next(new AppError(500, error.message));
    }
};

const getProfile = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await User.findById(req.params.id);
        return res.json({
            success: true,
            status: 200,
            message : 'Suceesfully find account.',
            data: user,
        });
    } catch (error) {
        next(new AppError(500, error.message));
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
            message : 'Profile updated successfully.',
            data: user,
        });
    } catch (error) {
        next(new AppError(500, error.message));
    }
};

const findAccount = async (req: Request,res: Response,next: NextFunction) => {
    try {
        const {q} = req.query
        const user = await User.findOne({$or:[{email : q},{phone : q}]})
        if (!user) {
            return next(new AppError(404, "Account not found."));
        }
        return res.json({
            success: true,
            status: 200,
            message : 'Successfully account find.',
            data: user,
        });
    } catch (error) {
        next(new AppError(500, error.message));
    }
};

const verifyAccount = async (req: IAuthRequest,res: Response,next: NextFunction) => {
    try {
        const findCode = await Verification.findOne({user : req.user})
        
        if(Date.now() > findCode.expire){
            return next(new AppError(401,'Verification code expired.'))
        }

        const isValid = await bcrypt.compare(req.body.code, findCode.code)
        
        if(!isValid){
            return next(new AppError(404,'Verification code not Found.'))
        }

        await Verification.deleteMany({user : req.user})

        return res.json({
            success: true,
            status: 200,
            message : 'Successfully verified.',
            data: {},
        });
    } catch (error) {
        next(new AppError(500, error.message));
    }
};

const forgetAccount = async (req: IAuthRequest,res: Response,next: NextFunction) => {
    try {
        const token = await jwt.sign({id : req.params.id},process.env.JWT_TOKEN)

        return res.json({
            success: true,
            status: 200,
            message : 'Verification code sent.',
            token : token,
            data: {},
        });
    } catch (error) {
        next(new AppError(500, error.message));
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
        next(new AppError(500, error.message));
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
        next(new AppError(500, error.message));
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
        next(new AppError(500, error.message));
    }
};

export { getProfile, signin, signup, updateProfile,findAccount,verifyAccount,forgetAccount,changeImageAccount,changeEmailAccount,changePhoneAccount };
