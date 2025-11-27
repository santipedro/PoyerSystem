import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Gender } from '../enums/gender.enum';
import { HealthInsurance } from '../enums/health-insurance.enum';

export class CreatePatientDto {
    @ApiProperty({ example: 'João da Silva', description: 'Nome completo do paciente' })
    @IsString()
    @IsNotEmpty()
    fullName: string;

    @ApiProperty({ example: '123.456.789-00', description: 'CPF do paciente' })
    @IsString()
    @IsNotEmpty()
    cpf: string;

    @ApiProperty({ example: '1990-01-01', description: 'Data de nascimento do paciente' })
    @IsDateString()
    @IsNotEmpty()
    birthDate: string;

    @ApiProperty({ example: 'Maria da Silva', description: 'Nome da mãe do paciente' })
    @IsString()
    @IsNotEmpty()
    motherName: string;

    @ApiProperty({ enum: Gender, description: 'Gênero do paciente' })
    @IsEnum(Gender)
    @IsNotEmpty()
    gender: Gender;

    @ApiProperty({ example: 'joao@example.com', description: 'Email do paciente' })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({ example: '(11) 99999-9999', description: 'Telefone do paciente' })
    @IsString()
    @IsNotEmpty()
    phone: string;

    @ApiProperty({ example: '01001-000', description: 'CEP do endereço do paciente' })
    @IsString()
    @IsNotEmpty()
    zipCode: string;

    @ApiProperty({ example: 'Rua Exemplo, 123', description: 'Endereço completo do paciente' })
    @IsString()
    @IsNotEmpty()
    address: string;

    @ApiProperty({ enum: HealthInsurance, description: 'Convênio médico do paciente' })
    @IsEnum(HealthInsurance)
    @IsNotEmpty()
    healthInsurance: HealthInsurance;

    @ApiProperty({ example: 'Plano Básico', description: 'Plano do convênio' })
    @IsString()
    @IsNotEmpty()
    plan: string;

    @ApiProperty({ example: '1234567890', description: 'Número da carteirinha do convênio' })
    @IsString()
    @IsNotEmpty()
    cardNumber: string;

    @ApiProperty({ example: '2025-12-31', description: 'Validade da carteirinha do convênio' })
    @IsDateString()
    @IsNotEmpty()
    cardValidity: string;
}
