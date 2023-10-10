import mongoose, { Document } from "mongoose";
import { IReply } from "../interface/models";

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



export default mongoose.model<IReply>("Reply", replySchema);