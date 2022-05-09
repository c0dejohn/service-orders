import * as dotenv from "dotenv";
dotenv.config();

const globals = {
    PORT: process.env.PORT || 8080,
    NODE_ENV: process.env.NODE_ENV || "development"
};

export default globals;

import {
    PostgresConnectionOptions
} from 'typeorm/driver/postgres/PostgresConnectionOptions';

import Customer from './dal/models/Customer';
import Order from './dal/models/Order';
import Service from './dal/models/Service';
import Technician from './dal/models/Technician';
import 'dotenv/config'

const typeOrmConfig = {
    type: process.env.POSTGRES_DB ?? 'postgres',
    host: process.env.HOST ?? 'localhost',
    port: 5432,
    username: process.env.USERNAME ?? 'postgres',
    password: process.env.PASSWORD ?? 'postgres',
    database: process.env.DATABASE ?? 'service_orders',
    synchronize: true,
    logging: false,
    entities: [
        Customer,
        Order,
        Service,
        Technician
    ],
    migrations: [],
};

export { typeOrmConfig };