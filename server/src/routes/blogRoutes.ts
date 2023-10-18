import { Router } from "express";
import {
    createBlog,
    deleteBlog,
    getAllBlog,
    getBlog,
    updateBlog,
} from "../controllers/blogControllers";
import authenticated from "../middleware/authentication";

const blogRouter = Router();

blogRouter
    .post("/", authenticated, createBlog)
    .put("/:id", authenticated, updateBlog)
    .delete("/:id", authenticated, deleteBlog)
    .get("/:id", getBlog)
    .get("/", getAllBlog);

export default blogRouter;
