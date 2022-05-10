import Technician from "../services/Techninican";
import { Request, Response } from "express";

class TechnicianController {

    list = async (_req: Request, res: Response) => {
        try {

            const technician = new Technician();
            const result = await technician.technicianList();
            res.send(result)

        } catch (error) {
            res.send(error);
        }
    };

    getById = async (req: Request, res: Response) => {
        try {

            const technician = new Technician();
            const result = await technician.getById(req.params.id);
            res.send(result)

        } catch (error) {
            console.error(error);
            res.send(error);
        }
    }
    createTechnician = async (req: Request, res: Response) => {
        try {
            const technician = new Technician();
            const { name, email, phone } = await req.body;
            const result = await technician.create(name, email, phone);
            return res.status(201).send(result);
        } catch (error) {
            res.send(error);
        }
    }

    update = async (req: Request, res: Response) => {
        try {
            const technician = new Technician();
            const { id } = req.params;
            const { name, email, phone } = await req.body;
            const result = await technician.update(id, name, email, phone);
            return res.status(200).json(result.affected > 0 ? { msg: "Updated" } : { msg: "Not Found" });
        } catch (error) {
            res.send(error);
        }
    }

    destroy = async (req: Request, res: Response) => {
        try {
            const technician = new Technician();
            const { id } = req.params;
            const result = await technician.destroy(id);
            return res.status(201).json(result.affected > 0 ? { msg: 'Deleted' } : { msg: 'Not Found' });
        } catch (error) {
            res.send(error);
        }
    }


}

export default TechnicianController;