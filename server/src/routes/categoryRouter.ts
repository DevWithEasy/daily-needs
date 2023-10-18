import { Router } from "express";
import {
    createCategory,
    deleteCategory,
    getAllCategory,
    getCategory,
    updateCategory,
} from "../controllers/categoryController";
import authenticated from "../middleware/authentication";

const productRouter = Router();

productRouter
    .post("/category", authenticated, createCategory)
    .put("/category/:id", authenticated, updateCategory)
    .delete("/category/:id", authenticated, deleteCategory)
    .get("/category/:id", getCategory)
    .get("/category", getAllCategory);

export default productRouter;
