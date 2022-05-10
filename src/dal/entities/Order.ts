import {
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    BaseEntity
} from 'typeorm';

import { Customer } from './Customer';
import { Service } from './Service';
import { Technician } from './Technician';

@Entity()
export class Order extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn({ nullable: true, default: null })
    updated_at: Date;
    @Column({ 'enum': ['pending', 'in_progress', 'done', 'canceled'], default: 'pending' })
    status: string;
    @Column()
    price: number;
    @Column({ nullable: true, default: null })
    quantity: number;
    @Column({ nullable: true })
    description: string;
    @Column({ nullable: true })
    tools: string;
    @Column({ nullable: false })
    customer_name: string;
    @Column({ enum: ['mantenimiento', 'instalación'] })
    service: string;
    @Column({ nullable: true })
    technician_name: string;


    // The first FK column.
    @ManyToOne(
        _ => Customer,
        {
            nullable: true
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
            nullable: true
        }
    )
    serivce: Service;
}