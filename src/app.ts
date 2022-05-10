import * as express from "express";
import * as morgan from "morgan";
import * as cors from "cors";
import customerRouter from "./routes/customerRouter.routes";
// import cartRouter from "./router/carrito.routes";
// import { createConnection } from "typeorm";
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.get('/', (_req, res) => {
    res.json({ status: "ok" })
})

app.use('/Customer', customerRouter)

export default app;