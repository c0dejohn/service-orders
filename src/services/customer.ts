import CustomerDAO from "../dal/dao/customerDao";
class Customer {

    async customerList() {
        try {
            const data = new CustomerDAO();

            return data.getAll();

        } catch (err) {
            console.error(err);
        }
    }

    async create(input) {
        try {
            const data = new CustomerDAO();
            const { name, email, phone, id_card } = input;
            return data.create(name, email, phone, id_card);
        } catch (err) {

            console.error(err);
            return err;
        }
    }
    async getById(id) {
        try {
            const data = new CustomerDAO();
            console.log(data.getById(id));
            return data.getById(id);
        } catch (err) {
            console.error(err);
            return err;
        }
    }
    async update(id, name, email, phone?, id_card?) {
        try {
            const data = new CustomerDAO();
            return data.update(id, name, email, phone, id_card);
        } catch (err) {
            console.error(err);
            return err;
        }
    }

    async destroy(id) {
        try {
            const data = new CustomerDAO();
            return data.destroy(id);
        } catch (err) {
            console.error(err);
            return err;
        }
    }

}
export default Customer;