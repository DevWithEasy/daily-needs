import { Router } from "express";
import {
    changeEmailAccount,
    changeImageAccount,
    changePhoneAccount,
    findAccount,
    forgetAccount,
    getProfile,
    signin,
    signup,
    updateProfile,
    verifyAccount,
    verifyCodeSendAgain,
} from "../controllers/userControllers";
import authenticated from "../middleware/authentication";

const userRouter = Router();

userRouter
    .post("/signup", signup)
    .post("/signin", signin)
    .get("/:id", getProfile)
    .put("/update", authenticated, updateProfile)
    .post("/find", findAccount)
    .put("/verify", authenticated, verifyAccount)
    .post("/forget", forgetAccount)
    .post("/send_code_again", verifyCodeSendAgain)
    .post("/change_email", changeEmailAccount)
    .post("/change_phone", changePhoneAccount)
    .post("/change_image", changeImageAccount);

export default userRouter;
