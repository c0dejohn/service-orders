import { Router } from "express";
const customerRouter = Router();
import Customer from "../dal/dao/customer";

const customer = new Customer();

customerRouter.get("/", customer);
// cartRouter.post("/", carrito.addProduct);
// cartRouter.put(`/:id`, carrito.update);
// cartRouter.delete(`/:id`, carrito.destroy);

export default cartRouter;