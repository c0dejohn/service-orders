import Customer from "../services/customer";
import { Request, Response } from "express";

class CustomerController {

    list = async (_req: Request, res: Response) => {
        try {

            const customer = new Customer();
            const result = await customer.customerList();
            res.send(result)

        } catch (error) {
            res.send(error);
        }
    };

    getById = async (req: Request, res: Response) => {
        try {

            const customer = new Customer();
            const result = await customer.getById(req.params.id);
            res.send(result)

        } catch (error) {
            console.error(error);
            res.send(error);
        }
    }
    createCustomer = async (req: Request, res: Response) => {
        try {
            const customer = new Customer();
            const result = await customer.create(req.body.input);
            return res.status(201).send(result);
        } catch (error) {
            res.send(error);
        }
    }

    update = async (req: Request, res: Response) => {
        try {
            const customer = new Customer();
            const { id } = req.params;
            const { name, email, phone, id_card } = await req.body;
            const result = await customer.update(id, name, email, phone, id_card);
            return res.status(200).json(result.affected > 0 ? { msg: "Updated" } : { msg: "Not Found" });
        } catch (error) {
            res.send(error);
        }
    }

    destroy = async (req: Request, res: Response) => {
        try {
            const customer = new Customer();
            const { id } = req.params;
            const result = await customer.destroy(id);
            return res.status(201).json(result.affected > 0 ? { msg: 'Deleted' } : { msg: 'Not Found' });
        } catch (error) {
            res.send(error);
        }
    }


}

export default CustomerController;