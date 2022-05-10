import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    BaseEntity
} from 'typeorm';




@Entity()
export class Service extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    description: string;
    @Column('enum', { enum: ['mantenimiento', 'instalación'] })
    type: string;
    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn({ nullable: true, default: null })
    updated_at: Date;
    @Column()
    order_id: string;
    @Column('enum', { enum: [{ basic: ['martillo', 'llaves bristol', 'destornilladores'], electrical: ['atornillador eléctrico', 'taladro percutor'] }] })
    tools: Array<string>;
    @Column()
    is_test_ok: boolean;

}