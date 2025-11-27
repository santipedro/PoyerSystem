import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePatientDto } from './dto/create-patient.dto';
import { Patient } from './entities/patient.entity';

@Injectable()
export class PatientsService {
    constructor(
        @InjectRepository(Patient)
        private patientsRepository: Repository<Patient>,
    ) { }

    create(createPatientDto: CreatePatientDto) {
        const patient = this.patientsRepository.create(createPatientDto);
        return this.patientsRepository.save(patient);
    }

    findAll() {
        return this.patientsRepository.find();
    }
}
