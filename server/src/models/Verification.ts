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
    }
},{
    timestamps : true
});

export default mongoose.model<IVerification>("Verification", verificationSchema);
