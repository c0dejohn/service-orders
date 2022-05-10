import { Customer } from '../entities/Customer';

import { AppDataSource } from "../../db";


const customerRepository = AppDataSource.getRepository(Customer);
export default class CustomerDao {

    async getAll() {
        return customerRepository.find()
    }
    async create(name, email) {
        return customerRepository.save({ name, email });
    }
    async getById(id) {
        return customerRepository.findBy({ id: id });
    }
    async update(id, name, email) {
        return customerRepository.update(id, { name, email });
    }
    async destroy(id) {
        return customerRepository.delete(id);
    }


}