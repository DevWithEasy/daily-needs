import mongoose, { Document } from "mongoose";
import { ICategory } from "../interface/models";

const productCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    }
},{
    timestamps : true
});

export default mongoose.model<ICategory>("ProductCategory", productCategorySchema);
