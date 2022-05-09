import {
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn
} from 'typeorm';

import Order from './Order';


@Entity()
export default class Customer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    email: string;
    created_at: Date;
    order_id: string;


    // The first FK column.
    @ManyToOne(
        _ => Order,
        {
            nullable: false
        }
    )
    order: Order;
}