import TechnicianDAO from "../dal/dao/technicianDao";

class Technician {

    async technicianList() {
        try {
            const data = new TechnicianDAO();

            return data.getAll();

        } catch (err) {
            console.error(err);
        }
    }

    async create(name: string, email: string, phone?: string) {
        try {
            const data = new TechnicianDAO();
            return data.create(name, email, phone);
        } catch (err) {

            console.error(err);
            return err;
        }
    }
    async getById(id: number) {
        try {
            const data = new TechnicianDAO();
            console.log(data.getById(id));
            return data.getById(id);
        } catch (err) {
            console.error(err);
            return err;
        }
    }
    async update(id: number, name: string, email: string, phone: string) {
        try {
            const data = new TechnicianDAO();
            return data.update(id, name, email, phone);
        } catch (err) {
            console.error(err);
            return err;
        }
    }

    async destroy(id) {
        try {
            const data = new TechnicianDAO();
            return data.destroy(id);
        } catch (err) {
            console.error(err);
            return err;
        }
    }
    async orderList(name) {
        try {
            const data = new TechnicianDAO();
            return data.getOrders(name);
        } catch (err) {
            console.error(err);
            return err;
        }
    }

}
export default Technician;