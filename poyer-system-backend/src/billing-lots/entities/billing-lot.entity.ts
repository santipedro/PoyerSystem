import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Patient } from '../../patients/entities/patient.entity';
import { HealthInsurance } from '../../patients/enums/health-insurance.enum';
import { BillingLotStatus } from '../enums/billing-lot-status.enum';

@Entity()
export class BillingLot {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'simple-enum',
        enum: HealthInsurance,
    })
    healthInsurance: HealthInsurance;

    @ManyToOne(() => Patient, { eager: true })
    patient: Patient;

    @Column()
    procedure: string;

    @Column()
    date: string;

    @Column('decimal')
    value: number;

    @Column({
        type: 'simple-enum',
        enum: BillingLotStatus,
        default: BillingLotStatus.PENDENTE,
    })
    status: BillingLotStatus;
}
