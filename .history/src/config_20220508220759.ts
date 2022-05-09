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
    host: process.env.HOST ?? 'localhost',
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

export default { typeOrmConfig };