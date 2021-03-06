import { Order } from './Order';
import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    BaseEntity,
    OneToMany,
} from 'typeorm';

@Entity()
export class Customer extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    name: string;
    @Column()
    email: string;
    @Column({ nullable: true })
    phone: string;
    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn()
    updated_at: Date;
    @Column({ nullable: true })
    id_card: string;


    // The first FK column.
    @OneToMany(_ => Order, order => order.id)
    orders: Order[]


}