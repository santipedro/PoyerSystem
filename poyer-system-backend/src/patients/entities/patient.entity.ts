import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Gender } from '../enums/gender.enum';
import { HealthInsurance } from '../enums/health-insurance.enum';

@Entity()
export class Patient {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullName: string;

    @Column()
    cpf: string;

    @Column()
    birthDate: string;

    @Column()
    motherName: string;

    @Column({
        type: 'simple-enum',
        enum: Gender,
    })
    gender: Gender;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    zipCode: string;

    @Column()
    address: string;

    @Column({
        type: 'simple-enum',
        enum: HealthInsurance,
    })
    healthInsurance: HealthInsurance;

    @Column()
    plan: string;

    @Column()
    cardNumber: string;

    @Column()
    cardValidity: string;
}
