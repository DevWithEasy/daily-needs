import mongoose, { Document } from "mongoose";
import { IComment } from "../interface/models";

const commentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref : 'User'
    },
    comment : {
        type : String,
        required : true
    },
    replies : {
        type : [
            {
                type: mongoose.Types.ObjectId,
                ref : 'Reply'
            }
        ]
    }
},{
    timestamps : true
});


export default mongoose.model<IComment>("Comment", commentSchema);