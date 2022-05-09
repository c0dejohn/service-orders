import * as express from "express";
import customerRouter from "./routes/customer.routes";
// import cartRouter from "./router/carrito.routes";
import 'dotenv/config';
// import { createConnection } from "typeorm";
const app = express();



// import { logger } from "./util/logger";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (_req, res) => {
    res.json({ status: "ok" })
})

app.use('/Customer', customerRouter)


const { PORT } = process.env;

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});