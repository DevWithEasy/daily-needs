import mongoose, { Document } from "mongoose";
import { IVerification } from "../interface/models";

const verificationSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    code : {
        type : String,
        required: true
    },
    expire : {
        type : Date,
        default : Date.now() + 21600000
    }
},{
    timestamps : true
});

export default mongoose.model<IVerification>("Verification", verificationSchema);
