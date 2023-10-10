import mongoose, { Document } from "mongoose";
import { IUser } from "../interface/models";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            min: 11,
            max: 14,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        image: {
            type: String,
            required: true,
            default: "/images/users/defaul_user.png",
        },
        password: {
            type: String,
            required: true,
        },
        isVerified: {
            type: Boolean,
            default: false,
        },
        orders: {
            type: [
                {
                    type: mongoose.Types.ObjectId,
                    ref: "Order",
                },
            ],
            default: [],
        },
        address: {
            area: {
                type: String,
            },
            postOffice: {
                type: String,
            },
            upazilla: {
                type: String,
            },
            district: {
                type: String,
            },
        },
    },
    {
        timestamps: true,
    }
);


export default mongoose.model<IUser>("User", userSchema);
