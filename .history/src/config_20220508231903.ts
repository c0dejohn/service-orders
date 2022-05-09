import {
    PostgresConnectionOptions
} from 'typeorm/driver/postgres/PostgresConnectionOptions';

import Customer from './dal/models/Customer';
import Order from './dal/models/Order';
import Service from './dal/models/Service';
import Technician from './dal/models/Technician';
import * as dotenv from 'dotenv';
dotenv.config()


const typeOrmConfig: PostgresConnectionOptions = {
    type: 'postgres',
    url: process.env.URI,
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

console.log(typeOrmConfig)

export default { typeOrmConfig };