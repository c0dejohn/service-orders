import "reflect-metadata"
import app from "./app"
import 'dotenv/config'
import { AppDataSource } from "./db"
const { PORT } = process.env;

async function main() {
    try {
        AppDataSource.initialize()
        console.log("Database connected")
        app.listen(PORT, () => {
            console.log(`server listening on port ${PORT}`);
        });
    } catch (error) {
        console.log(error)
        return error
    }

}

main()
