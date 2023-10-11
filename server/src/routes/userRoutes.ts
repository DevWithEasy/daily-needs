import { Router } from "express";
import {
    changePhoneAccount,
    changeEmailAccount,
    findAccount,
    forgetAccount,
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
    .put("/verify",authenticated, verifyAccount)
    .post("/forget", forgetAccount)
    .post("/change_email", changeEmailAccount)
    .post("/change_phone", changePhoneAccount)
    .post("/change_image", changeImageAccount)

export default userRouter;
