import * as express from "express";
import * as morgan from "morgan";
import * as cors from "cors";
import customerRouter from "./routes/customerRouter.routes";
import orderRouter from "./routes/orders.routes";
import technicianRouter from "./routes/technicianRouter.routes";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.get('/', (_req, res) => {
    res.json({ status: "ok" })
})

app.use('/api/customer', customerRouter)
app.use('/api/order', orderRouter)
app.use('/api/technician', technicianRouter)

export default app;