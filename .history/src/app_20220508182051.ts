import * as express from "express";
// import productRouter from "./router/productos.routes";
// import cartRouter from "./router/carrito.routes";
import config from "./config";
import { createConnection } from "typeorm";
const app = express();

createConnection(config.typeOrmConfig)

// import { logger } from "./util/logger";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (_req, res) => {
    res.json({ status: "ok" })
})

const { PORT } = config;

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT ?? 5000}`);
});