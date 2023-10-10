import mongoose, { Document } from "mongoose";

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref : 'User'
    },
    bill : {
        type : Number,
        required : true
    },
    charge : {
        type : Number,
        required : true
    },
    products : {
        type : [
            {
                quantity : {
                    type : Number,
                    required : true
                },
                product : {
                    type : mongoose.Types.ObjectId,
                    ref : 'Product'
                }
            }
        ],
        required : true
    },
    status : {
        type : [
            {
                date : {
                    date : Date,
                    required :true,
                    default : Date.now()
                },
                status : {
                    type : String,
                    required : true
                }
            }
        ]
    }
},{
    timestamps : true
});

interface IOrder extends Document {
    name: string,
    bill : Number,
    charge : Number,
    products : {
        quantity : Number,
        product : string
    }[],
    status : {
        date : string,
        status : string
    }[]
}

export default mongoose.model<IOrder>("Order", orderSchema);