import { Document } from "mongoose";

interface IUser extends Document {
    name: string
    email: string
    image: {
        url? : string
        public_id? : string
    }
    password: string
    isVerified: boolean
    orders: string[]
    address: {
        area: string
        postOfice: string
        upazilla: string
        district: string
    };
}

interface IProduct extends Document {
    category : string
    name: string
    sku: string
    price: number
    stock: number
    image: {
        url? : string
        public_id? : string
    }
    description: string
    additionalInfo: string
    comments: string[]
}

interface ICategory extends Document {
    name: string
}

interface IComment extends Document {
    user: string
    comment: string
    replies: string[]
}

interface IOrder extends Document {
    name: string
    bill: number
    charge: number
    products: {
        quantity: number
        product: string
    }[];
    status: {
        date: string
        status: string
    }[];
}

interface IReply extends Document {
    user: string
    comment: string
}

interface IVerification extends Document {
    user: string
    code: string
    expire : number
}

export { ICategory, IComment, IOrder, IProduct, IReply, IUser, IVerification };
