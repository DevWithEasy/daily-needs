import mongoose, { Document } from "mongoose";
import { IProduct } from "../interface/models";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    sku : {
        type : String,
        required: true
    },
    price : {
        type : Number,
        required: true
    },
    stock : {
        type : Number,
        required: true,
        default : 0
    },
    description : {
        type : String,
        required: true
    },
    additionalInfo : {
        type : String,
        required: true
    },
    comments :{
        type : [
            {
                type : mongoose.Types.ObjectId,
                ref: 'Comment'
            }
        ]
    }

},{
    timestamps : true
});



export default mongoose.model<IProduct>("Product", productSchema);
