import {
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn
} from 'typeorm';

import Order from './Order';


@Entity()
export default class Service {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;
    type: string;
    created_at: Date;
    order_id: string;
    tools: string;
    is_test_ok: boolean;


    // The first FK column.
    @ManyToOne(
        _ => Order,
        {
            nullable: false
        }
    )
    order: Order;
}