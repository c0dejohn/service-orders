import { AppDataSource } from "../../db";
import { Order } from '../entities/Order';
import { Technician } from '../entities/Technician';

const orderRepository = AppDataSource.getRepository(Order);
const technicianRepository = AppDataSource.getRepository(Technician);
const msg = { msg: 'Something goes wrong' }

export default class OrderDao {

    async getAll() {
        try {
            return await orderRepository.find();
        } catch (error) {
            console.error(error);
            return msg;
        }

    }
    async create(customer_name, service, price, quantity, description, tools) {
        try {
            const technician = await technicianRepository.query(`SELECT id, name FROM technician order by RANDOM() LIMIT 1`)
            return orderRepository.save({ customer_name, service, price, quantity, description, tools, technician: technician[0].id, technician_name: technician[0].name });
        } catch (error) {
            console.error(error);
            return msg;
        }

    }
    async getById(id) {
        try {
            return await orderRepository.findBy({ id: id });
        } catch (error) {
            console.error(error);
            return msg;
        }
    }
    async update(id, customer_name?, service?, price?, quantity?, description?, tools?) {
        try {
            return await orderRepository.update(id, { customer_name, service, price, quantity, description, tools });
        } catch (error) {
            console.error(error);
            return msg;
        }
    }
    async destroy(id) {
        try {
            return await orderRepository.delete(id);
        } catch (error) {
            console.error(error);
            return msg;
        }


    }
}