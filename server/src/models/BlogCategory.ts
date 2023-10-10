import mongoose, { Document } from "mongoose";

const blogCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    }
},{
    timestamps : true
});

interface IBlogCategory extends Document {
    name: string
}

export default mongoose.model<IBlogCategory>("BlogCategory", blogCategorySchema);
