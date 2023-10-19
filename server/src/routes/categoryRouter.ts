import { Router } from "express";
import {
    createCategory,
    deleteCategory,
    getAllCategory,
    getCategory,
    updateCategory,
} from "../controllers/categoryController";
import authenticated from "../middleware/authentication";

const categoryRouter = Router();

categoryRouter
    .post("/", authenticated, createCategory)
    .put("/:id", authenticated, updateCategory)
    .delete("/:id", authenticated, deleteCategory)
    .get("/:id", getCategory)
    .get("/", getAllCategory);

export default categoryRouter;
