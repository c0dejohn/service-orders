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

    async create(name, email, phone?) {
        try {
            const data = new TechnicianDAO();
            return data.create(name, email, phone);
        } catch (err) {

            console.error(err);
            return err;
        }
    }
    async getById(id) {
        try {
            const data = new TechnicianDAO();
            console.log(data.getById(id));
            return data.getById(id);
        } catch (err) {
            console.error(err);
            return err;
        }
    }
    async update(id, name, email, phone) {
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

}
export default Technician;