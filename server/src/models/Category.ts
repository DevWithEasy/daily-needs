import mongoose from "mongoose";
import { ICategory } from "../interface/models";

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        type: {
            type: String,
            required: true,
            enum: ["product", "blog"],
        },
        typeItems: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }]
    },
    {
        timestamps: true,
    }
);

export default mongoose.model<ICategory>("Category", categorySchema);
