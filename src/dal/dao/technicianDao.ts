/**
 * TODO:
 * 1. Create a metethod to list orders by technician
 */
import { Technician } from '../entities/Technician';
import { Order } from '../entities/Order';
import { AppDataSource } from "../../db";


const technicianRepository = AppDataSource.getRepository(Technician);
const orderRepository = AppDataSource.getRepository(Order);
const msg = { msg: 'Something goes wrong' }
export default class TechnicianDao {

    async getAll() {
        try {
            return await technicianRepository.find()
        } catch (error) {
            console.error(error);
            return msg;
        }

    }
    async create(name, email, phone?) {
        try {
            return await technicianRepository.save({ name, email, phone });
        } catch (error) {
            console.error(error);
            return msg
        }

    }
    async getById(id) {
        try {
            return await technicianRepository.findBy({ id: id });
        } catch (error) {
            console.error(error);
            return msg
        }

    }
    async update(id, name, email, phone?) {
        try {
            return await technicianRepository.update(id, { name, email, phone });
        } catch (error) {
            console.error(error);
            return msg
        }

    }
    async destroy(id) {
        try {
            return await technicianRepository.delete(id);
        } catch (error) {
            console.error(error);
            return msg

        }

    }
    async getOrders(name) {
        try {
            return await orderRepository.findBy({ technician_name: name });

        } catch (error) {
            console.error(error);
            return msg
        }
    }

}