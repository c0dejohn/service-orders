import Order from "../services/orders";
import { Request, Response } from "express";

class OrderController {

    list = async (_req: Request, res: Response) => {
        try {

            const order = new Order();
            const result = await order.orderList();
            res.send(result)

        } catch (error) {
            res.send(error);
        }
    };

    getById = async (req: Request, res: Response) => {
        try {

            const order = new Order();
            const result = await order.getById(req.params.id);
            res.send(result)

        } catch (error) {
            console.error(error);
            res.send(error);
        }
    }
    createOrder = async (req: Request, res: Response) => {
        try {
            const order = new Order();
            const { input } = await req.body;
            const result = await order.create(input);
            return res.status(201).send(result);
        } catch (error) {
            res.send(error);
        }
    }

    update = async (req: Request, res: Response) => {
        try {
            const order = new Order();
            const { id } = req.params;
            const { customer_name, service, price, quantity, description, tools } = await req.body;
            const result = await order.update(id, customer_name, service, price, quantity, description, tools);
            return res.status(200).json(result.affected > 0 ? { msg: "Updated" } : { msg: "Not Found" });
        } catch (error) {
            res.send(error);
        }
    }

    destroy = async (req: Request, res: Response) => {
        try {
            const order = new Order();
            const { id } = req.params;
            const result = await order.destroy(id);
            return res.status(201).json(result.affected > 0 ? { msg: 'Deleted' } : { msg: 'Not Found' });
        } catch (error) {
            res.send(error);
        }
    }


}

export default OrderController;