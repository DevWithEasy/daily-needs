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
    changePassword
} from "../controllers/userControllers";
import authenticated from "../middleware/authentication";

const userRouter = Router();

userRouter
    .post("/signup", signup)
    .post("/signin", signin)
    .get("/:id", getProfile)
    .put("/update", authenticated, updateProfile)
    .put("/verify", authenticated, verifyAccount)
    .get("/find/account",findAccount)
    .post("/forget/:id", forgetAccount)
    .post("/send_code_again", authenticated, verifyCodeSendAgain)
    .put("/reset_password", authenticated, changePassword)
    .post("/change_email", changeEmailAccount)
    .post("/change_phone", changePhoneAccount)
    .post("/change_image", changeImageAccount);

export default userRouter;
