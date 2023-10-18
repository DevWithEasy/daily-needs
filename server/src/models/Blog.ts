import mongoose from "mongoose";
import { IBlog } from "../interface/models";

const blogSchema = new mongoose.Schema(
    {
        category: {
            type: mongoose.Types.ObjectId,
            ref: "Category",
        },
        user: {
            type: mongoose.Types.ObjectId,
            ref: "User",
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required : true
        },
        image :{
            url : {
                type : String
            },
            public_id : {
                type : String
            }
        }
    },
    {
        timestamps: true,
    }
);

export default mongoose.model<IBlog>("Blog", blogSchema);
