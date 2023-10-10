import mongoose, { Document } from "mongoose";

const productCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    }
},{
    timestamps : true
});

interface IProductCategory extends Document {
    name: string
}

export default mongoose.model<IProductCategory>("ProductCategory", productCategorySchema);
