import mongoose, { Document } from "mongoose";

const replySchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref : 'User'
    },
    reply : {
        type : String,
        required : true
    }
},{
    timestamps : true
});

interface IReply extends Document {
    name: string,
    comment : string
}

export default mongoose.model<IReply>("Reply", replySchema);