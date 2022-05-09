import Customer from '../models/Customer';

import config from "../../config";
import { createConnection } from "typeorm";


const connect = createConnection(config.typeOrmConfig)
export default class CustomerDao {
    constructor() { /* TODO document why this constructor is empty */ }
    // async create(customer: Customer): Promise<Customer> {

    // }
    // async update(customer: Customer): Promise<Customer> {

    // }
    // async delete(id: number): Promise<Customer> {

    // }
    // async list(): Promise<Customer[]> {

    // }
    async find(id: number): Promise<Customer> {

        const findCustomer = await connect.then(
            async (connection) => {
                // const customer = new Customer();
                const customerRepository = connection.getRepository(Customer);
                console.log(await customerRepository.find());
                return customerRepository.find();

            }).catch(error => console.log(error));


        throw new Error('Customer not found')
    }

}