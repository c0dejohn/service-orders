import express from "express";
// import productRouter from "./router/productos.routes";
// import cartRouter from "./router/carrito.routes";
import config from "./config";
const app = express();

// import { logger } from "./util/logger";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const { PORT } = config;

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});