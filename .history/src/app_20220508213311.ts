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

const { port } = config.typeOrmConfig;

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});