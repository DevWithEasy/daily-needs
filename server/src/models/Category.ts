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
        typeItems : {
            type : Array,
            default : []
        }
    },
    {
        timestamps: true,
    }
);

export default mongoose.model<ICategory>("Category", categorySchema);
