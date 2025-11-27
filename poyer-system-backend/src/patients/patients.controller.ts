import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePatientDto } from './dto/create-patient.dto';
import { PatientsService } from './patients.service';

@ApiTags('patients')
@Controller('patients')
export class PatientsController {
    constructor(private readonly patientsService: PatientsService) { }

    @Post()
    @ApiOperation({ summary: 'Cadastrar um novo paciente' })
    @ApiResponse({ status: 201, description: 'Paciente cadastrado com sucesso.', type: CreatePatientDto })
    create(@Body() createPatientDto: CreatePatientDto) {
        return this.patientsService.create(createPatientDto);
    }

    @Get()
    @ApiOperation({ summary: 'Listar todos os pacientes' })
    @ApiResponse({ status: 200, description: 'Lista de pacientes retornada com sucesso.' })
    findAll() {
        return this.patientsService.findAll();
    }
}
