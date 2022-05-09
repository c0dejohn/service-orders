export class CustomerDao {
    constructor() { }
    async create(customer: Customer): Promise<Customer> {

    }
    async update(customer: Customer): Promise<Customer> {

    }
    async delete(id: number): Promise<Customer> {

    }
    async list(): Promise<Customer[]> {

    }
    async find(id: number): Promise<Customer> {
        const findCustomer = await Customer.findOne(id)
        if (findCustomer) {
            return findCustomer
        }
        throw new Error('Customer not found')
    }

}