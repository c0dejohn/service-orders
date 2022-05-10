import { Customer } from '../entities/Customer';

import { AppDataSource } from "../../db";


const customerRepository = AppDataSource.getRepository(Customer);
const msg = { msg: 'Something goes wrong' }
export default class CustomerDao {

    async getAll() {
        try {
            return await customerRepository.find()
        } catch (error) {
            console.error(error);
            return msg;
        }

    }
    async create(name, email) {
        try {
            return await customerRepository.save({ name, email });
        } catch (error) {
            console.error(error);
            return msg
        }

    }
    async getById(id) {
        try {
            return await customerRepository.findBy({ id: id });
        } catch (error) {
            console.error(error);
            return msg
        }

    }
    async update(id, name, email, id_card?) {
        try {
            return await customerRepository.update(id, { name, email, id_card });
        } catch (error) {
            console.error(error);
            return msg
        }

    }
    async destroy(id) {
        try {
            return await customerRepository.delete(id);
        } catch (error) {
            console.error(error);
            return msg

        }

    }
}