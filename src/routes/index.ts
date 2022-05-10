import { Router } from "express";
const customerRouter = Router();
import Customer from "../dal/dao/customerDao";

const customer = new Customer();

customerRouter.get("/", customer.getAll);
customerRouter.post("/", customer.create);
// cartRouter.post("/", carrito.addProduct);
// cartRouter.put(`/:id`, carrito.update);
// cartRouter.delete(`/:id`, carrito.destroy);

export default customerRouter;