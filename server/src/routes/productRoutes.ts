import { Router } from "express";
import {
    createProduct,
    deleteProduct,
    findProduct,
    getAllProduct,
    getProductByCategory,
    getSingleProduct,
    updateProduct,
} from "../controllers/productControllers";
import upload from "../middleware/upload";

const productRouter = Router();

productRouter
    .post("/", upload.single("file"), createProduct)
    .put("/:id", upload.single("file"), updateProduct)
    .delete("/:id", deleteProduct)
    .get("/:id", getSingleProduct)
    .get("/", getAllProduct)
    .get("/category/:id", getProductByCategory)
    .get("/find/product", findProduct);

export default productRouter;
