import { Document } from "mongoose";

export interface IUser extends Document {
    name: string
    email: string
    image: {
        url?: string
        public_id?: string
    }
    password: string
    isVerified: boolean
    orders: string[]
    address: {
        area: string
        postOfice: string
        upazilla: string
        district: string
    }
}

export interface IProduct extends Document {
    category: string
    name: string
    quantity : number
    sku: string
    price: number
    stock: number
    image: {
        url?: string
        public_id?: string
    }
    description: string
    additionalInfo: string
    comments: string[]
}

export interface ICategory extends Document {
    name: string
    type: string
    typeItems: string[]
}

export interface IComment extends Document {
    user: string
    comment: string
    replies: string[]
}

export interface IOrder extends Document {
    name: string
    bill: number
    charge: number
    products: {
        quantity: number
        product: string
    }[]
    status: {
        date: string
        status: string
    }[]
}

export interface IBlog extends Document {
    category : string
    user : string
    title: string
    description: string
    image: {
        url: string
        public_id: string
    }
    views: number
}

export interface IReply extends Document {
    user: string
    comment: string
}

export interface IVerification extends Document {
    user: string
    code: string
    expire: number
}