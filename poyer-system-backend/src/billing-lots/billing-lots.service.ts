import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Patient } from '../patients/entities/patient.entity';
import { CreateBillingLotDto } from './dto/create-billing-lot.dto';
import { ProcessBillingLotsDto } from './dto/process-billing-lots.dto';
import { BillingLot } from './entities/billing-lot.entity';
import { BillingLotStatus } from './enums/billing-lot-status.enum';

@Injectable()
export class BillingLotsService {
    constructor(
        @InjectRepository(BillingLot)
        private billingLotsRepository: Repository<BillingLot>,
        @InjectRepository(Patient)
        private patientsRepository: Repository<Patient>,
    ) { }

    async create(createBillingLotDto: CreateBillingLotDto) {
        const patient = await this.patientsRepository.findOneBy({ id: createBillingLotDto.patientId });
        if (!patient) {
            throw new NotFoundException(`Patient with ID ${createBillingLotDto.patientId} not found`);
        }

        const billingLot = this.billingLotsRepository.create({
            ...createBillingLotDto,
            patient,
            status: BillingLotStatus.PENDENTE,
        });

        return this.billingLotsRepository.save(billingLot);
    }

    async findAll() {
        return this.billingLotsRepository.find();
    }

    async processLots(processBillingLotsDto: ProcessBillingLotsDto) {
        const { ids } = processBillingLotsDto;

        // Update status for all lots with the given IDs
        await this.billingLotsRepository.update(
            { id: In(ids) },
            { status: BillingLotStatus.PROCESSADO },
        );

        // Return the updated lots
        return this.billingLotsRepository.findBy({ id: In(ids) });
    }
}
