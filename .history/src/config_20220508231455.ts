import {
    PostgresConnectionOptions
} from 'typeorm/driver/postgres/PostgresConnectionOptions';

import Customer from './dal/models/Customer';
import Order from './dal/models/Order';
import Service from './dal/models/Service';
import Technician from './dal/models/Technician';
import * as dotenv from 'dotenv';
dotenv.config()



console.log(process.env.USER)

const typeOrmConfig: PostgresConnectionOptions = {
    type: 'postgres',
    host: process.env.HOST,
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE ?? 'service_orders',
    synchronize: true,
    logging: false,
    entities: [
        Customer,
        Order,
        Service,
        Technician
    ],
    ssl: {
        rejectUnauthorized: false
    },
    migrations: ["migration/*.ts"],

};



export default { typeOrmConfig };