import mongoose, { Document } from "mongoose";

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

interface IComment extends Document {
    name: string,
    comment : string
}

export default mongoose.model<IComment>("Comment", commentSchema);