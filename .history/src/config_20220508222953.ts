import {
    PostgresConnectionOptions
} from 'typeorm/driver/postgres/PostgresConnectionOptions';

import Customer from './dal/models/Customer';
import Order from './dal/models/Order';
import Service from './dal/models/Service';
import Technician from './dal/models/Technician';
import 'dotenv/config';


const typeOrmConfig: PostgresConnectionOptions = {
    type: 'postgres',
    host: process.env.HOST,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE ?? 'service_orders',
    "synchronize": true,
    "logging": true,
    "entities": ["src/entity/*.*"],
    "ssl": true,
    "extra": {
        "ssl": {
            "rejectUnauthorized": false
        }
    }
};


export default { typeOrmConfig };