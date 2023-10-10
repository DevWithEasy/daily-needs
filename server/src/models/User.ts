import mongoose, { Document } from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
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
            }
        ],
        default : []
    },
    address : {
        area : {
            type : String
        },
        postOffice : {
            type : String
        },
        upazilla : {
            type : String
        },
        district : {
            type : String
        }
    }
},{
    timestamps : true
});

interface IUser extends Document {
    name: string,
    email: string,
    image: string,
    password: string,
    isVerified: Boolean,
    orders: string[],
    address : {
        area : string,
        postOfice : string,
        upazilla : string,
        district : string
    }
}

export default mongoose.model<IUser>("User", userSchema);
