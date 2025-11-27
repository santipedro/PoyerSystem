import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { HealthInsurance } from '../../patients/enums/health-insurance.enum';

export class CreateBillingLotDto {
    @ApiProperty({ enum: HealthInsurance, description: 'Convênio do lote' })
    @IsEnum(HealthInsurance)
    @IsNotEmpty()
    healthInsurance: HealthInsurance;

    @ApiProperty({ example: 1, description: 'ID do paciente' })
    @IsNumber()
    @IsNotEmpty()
    patientId: number;

    @ApiProperty({ example: 'Consulta Médica', description: 'Procedimento realizado' })
    @IsString()
    @IsNotEmpty()
    procedure: string;

    @ApiProperty({ example: '2025-11-26', description: 'Data do procedimento' })
    @IsDateString()
    @IsNotEmpty()
    date: string;

    @ApiProperty({ example: 150.00, description: 'Valor do procedimento' })
    @IsNumber()
    @IsNotEmpty()
    value: number;
}
