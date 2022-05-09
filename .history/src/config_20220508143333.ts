

import {
    PostgresConnectionOptions
} from 'typeorm/driver/postgres/PostgresConnectionOptions';

import Customer from './models/Customer';
import Order from './models/Order';
import Service from './models/Service';
import Technician from './models/Technician';

const typeOrmConfig: PostgresConnectionOptions = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "service_orders",
    synchronize: true,
    logging: false,
    entities: [
        Customer,
        Order,
        Service,
        Technician
    ]
};

export { typeOrmConfig };