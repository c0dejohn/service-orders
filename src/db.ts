import { DataSource } from 'typeorm';
import { Customer } from './dal/entities/Customer';
import { Order } from './dal/entities/Order';
import { Technician } from './dal/entities/Technician';
import * as dotenv from 'dotenv';
dotenv.config()

export const AppDataSource = new DataSource({

    type: 'postgres',
    url: process.env.URI,
    synchronize: true,
    logging: false,
    entities: [
        Customer,
        Order,
        Technician
    ],
    ssl: {
        rejectUnauthorized: false
    }


});

