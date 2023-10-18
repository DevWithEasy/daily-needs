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
    .delete("/:id", deleteOrder)
    .get("/:id", getOrder)
    .get("/", getAllOrder)
    .get("/user/:id", getAllOrderByUser);

export default orderRouter;
