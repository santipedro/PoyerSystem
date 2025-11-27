import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patient } from '../patients/entities/patient.entity';
import { BillingLotsController } from './billing-lots.controller';
import { BillingLotsService } from './billing-lots.service';
import { BillingLot } from './entities/billing-lot.entity';

@Module({
    imports: [TypeOrmModule.forFeature([BillingLot, Patient])],
    controllers: [BillingLotsController],
    providers: [BillingLotsService],
})
export class BillingLotsModule { }
