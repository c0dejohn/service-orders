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
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn({ nullable: true, default: null })
    updated_at: Date;
    @Column({ 'enum': ['pending', 'in_progress', 'done', 'canceled'] })
    status: string;
    @Column()
    price: number;
    @Column({ nullable: true, default: null })
    quantity: number;
    @Column({ nullable: true })
    description: string;
    @Column('simple-array', { nullable: true })
    tools: string[];
    @Column({ nullable: false })
    customer_name: string;
    @Column({ enum: ['mantenimiento', 'instalación'] })
    service: string;


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
            nullable: true
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