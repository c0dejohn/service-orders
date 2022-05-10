import OrderDAO from "../dal/dao/orderDao";
class Order {

    async orderList() {
        try {
            const data = new OrderDAO();

            return data.getAll();

        } catch (err) {
            console.error(err);
        }
    }

    async create(input) {
        try {
            const data = new OrderDAO();
            const { customer_name, service, price, quantity, description, tools, customerId } = input;
            return data.create(customer_name, service, price, quantity, description, tools, customerId);
        } catch (err) {

            console.error(err);
            return err;
        }
    }
    async getById(id) {
        try {
            const data = new OrderDAO();
            console.log(data.getById(id));
            return data.getById(id);
        } catch (err) {
            console.error(err);
            return err;
        }
    }
    async update(id, customer_name?, service?, price?, quantity?, description?, tools?) {
        try {
            const data = new OrderDAO();
            return data.update(id, customer_name, service, price, quantity, description, tools);
        } catch (err) {
            console.error(err);
            return err;
        }
    }

    async destroy(id) {
        try {
            const data = new OrderDAO();
            return data.destroy(id);
        } catch (err) {
            console.error(err);
            return err;
        }
    }

}
export default Order;