import {
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn
} from 'typeorm';

import Order from './Order';


@Entity()
export default class Technician {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    @Column()
    email: string;
    @Column()
    created_at: Date;
    @Column()
    order_id: string;
    @Column()
    id_card: string;


    // The first FK column.
    @ManyToOne(
        _ => Order,
        {
            nullable: false
        }
    )
    order: Order;
}