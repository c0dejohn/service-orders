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
    @Column()
    email: string;
    @Column()
    created_at: Date;
    @Column()
    order_id: string;


    // The first FK column.

}