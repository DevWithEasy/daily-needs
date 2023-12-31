import { Router } from "express";
import {
    createOrder,
    deleteOrder,
    getAllOrder,
    getAllOrderByUser,
    getOrder,
    updateOrder,
} from "../controllers/orderControllers";
import authenticated from "../middleware/authentication";

const orderRouter = Router();

orderRouter
    .post("/", authenticated, createOrder)
    .put("/:id", authenticated, updateOrder)
    .delete("/:id",authenticated, deleteOrder)
    .get("/:id",authenticated, getOrder)
    .get("/",authenticated, getAllOrder)
    .get("/user/:id",authenticated, getAllOrderByUser)

export default orderRouter;
