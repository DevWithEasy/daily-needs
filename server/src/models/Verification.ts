import mongoose, { Document } from "mongoose";

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

interface IVerification extends Document {
    user: string,
    code : true
}

export default mongoose.model<IVerification>("Verification", verificationSchema);
