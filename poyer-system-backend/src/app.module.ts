import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientsModule } from './patients/patients.module';
import { Patient } from './patients/entities/patient.entity';
import { BillingLotsModule } from './billing-lots/billing-lots.module';
import { BillingLot } from './billing-lots/entities/billing-lot.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'database.sqlite',
      entities: [Patient, BillingLot],
      synchronize: true,
    }),
    PatientsModule,
    BillingLotsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
