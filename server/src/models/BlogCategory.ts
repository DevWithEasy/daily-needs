import mongoose, { Document } from "mongoose";
import { ICategory } from "../interface/models";

const blogCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    }
},{
    timestamps : true
});



export default mongoose.model<ICategory>("BlogCategory", blogCategorySchema);
