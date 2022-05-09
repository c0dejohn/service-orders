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
    @Column()
    type: string;
    @Column()
    created_at: Date;
    @Column()
    order_id: string;
    @Column()
    tools: string;
    @Column()
    is_test_ok: boolean;


    // The first FK column.
    @ManyToOne(
        _ => Order,
        {
            nullable: true
        }
    )
    order: Order;
}