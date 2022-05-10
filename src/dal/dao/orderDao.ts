import { Customer } from '../entities/Customer';

import { AppDataSource } from "../../db";
import { Order } from '../entities/Order';
import { Technician } from '../entities/Technician';

const orderRepository = AppDataSource.getRepository(Order);
const technicianRepository = AppDataSource.getRepository(Technician);

export default class OrderDao {

    async getAll() {
        return orderRepository.find()
    }
    async create(customer_name, service, price, quantity, description, tools) {
        const technician = await technicianRepository.query(`SELECT id FROM technician order by RAND() LIMIT 1`)
        return orderRepository.save({ customer_name, service, price, quantity, description, tools, technician });
    }
    async getById(id) {
        return orderRepository.findBy({ id: id });
    }
    async update(id, customer_name?, service?, price?, quantity?, description?, tools?) {
        return orderRepository.update(id, { customer_name, service, price, quantity, description, tools });
    }
    async destroy(id) {
        return orderRepository.delete(id);
    }


}