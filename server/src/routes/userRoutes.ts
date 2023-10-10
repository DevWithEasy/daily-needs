import { Router } from "express";
import {
    changePhoneAccount,
    changeEmailAccount,
    findAccount,
    forgetAccount,
    forgetVerifyAccount,
    getProfile,
    signin,
    signup,
    updateProfile,
    verifyAccount,
    changeImageAccount,
} from "../controllers/userControllers";
import authenticated from "../middleware/authentication";

const userRouter = Router();

userRouter
    .post("/signup", signup)
    .post("/signin", signin)
    .get("/:id", getProfile)
    .put("/update", authenticated, updateProfile)
    .post("/find", findAccount)
    .put("/verify", verifyAccount)
    .post("/forget", forgetAccount)
    .put("/forget_verify", forgetVerifyAccount)
    .post("/change_email", changeEmailAccount)
    .post("/change_phone", changePhoneAccount)
    .post("/change_image", changeImageAccount)

export default userRouter;
