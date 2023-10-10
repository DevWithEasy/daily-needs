import mongoose, { Document } from "mongoose";

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

interface IProduct extends Document {
    name: string,
    sku : string,
    price : number,
    stock : number,
    description : string,
    additionalInfo : string
    comments : string[],
}

export default mongoose.model<IProduct>("Product", productSchema);
