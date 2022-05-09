import {
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn
} from 'typeorm';

import Customer from './Customer';
import Service from './Service';
import Technician from './Technician';

@Entity()
export default class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    email: string;
    created_at: Date;
    order_id: string;


    // The first FK column.
    @ManyToOne(
        _ => Customer,
        {
            nullable: false
        }
    )
    customer: Customer;

    @ManyToOne(
        _ => Technician,
        {
            nullable: false
        }
    )
    technician: Technician;

    @ManyToOne(
        _ => Service,
        {
            nullable: false
        }
    )
    serivce: Service;
}