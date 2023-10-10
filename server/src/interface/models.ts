import { Document } from "mongoose";

interface IUser extends Document {
    name: string;
    email: string;
    image: string;
    password: string;
    isVerified: Boolean;
    orders: string[];
    address: {
        area: string;
        postOfice: string;
        upazilla: string;
        district: string;
    };
}

interface IProduct extends Document {
    name: string;
    sku: string;
    price: number;
    stock: number;
    description: string;
    additionalInfo: string;
    comments: string[];
}

interface ICategory extends Document {
    name: string;
}

interface IComment extends Document {
    user: string;
    comment: string;
    replies: string[];
}

interface IOrder extends Document {
    name: string;
    bill: Number;
    charge: Number;
    products: {
        quantity: Number;
        product: string;
    }[];
    status: {
        date: string;
        status: string;
    }[];
}

interface IReply extends Document {
    user: string;
    comment: string;
}

interface IVerification extends Document {
    user: string;
    code: true;
}

export { ICategory, IComment, IOrder, IProduct, IReply, IUser, IVerification };
