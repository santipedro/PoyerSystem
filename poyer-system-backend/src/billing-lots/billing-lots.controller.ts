import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BillingLotsService } from './billing-lots.service';
import { CreateBillingLotDto } from './dto/create-billing-lot.dto';
import { ProcessBillingLotsDto } from './dto/process-billing-lots.dto';
import { BillingLot } from './entities/billing-lot.entity';

@ApiTags('billing-lots')
@Controller('billing-lots')
export class BillingLotsController {
    constructor(private readonly billingLotsService: BillingLotsService) { }

    @Post()
    @ApiOperation({ summary: 'Cadastrar um novo lote de faturamento' })
    @ApiResponse({ status: 201, description: 'Lote criado com sucesso.', type: BillingLot })
    create(@Body() createBillingLotDto: CreateBillingLotDto) {
        return this.billingLotsService.create(createBillingLotDto);
    }

    @Get()
    @ApiOperation({ summary: 'Listar todos os lotes de faturamento' })
    @ApiResponse({ status: 200, description: 'Lista de lotes retornada com sucesso.' })
    findAll() {
        return this.billingLotsService.findAll();
    }

    @Put('process')
    @ApiOperation({ summary: 'Processar uma lista de lotes de faturamento' })
    @ApiResponse({ status: 200, description: 'Lotes processados com sucesso.' })
    processLots(@Body() processBillingLotsDto: ProcessBillingLotsDto) {
        return this.billingLotsService.processLots(processBillingLotsDto);
    }
}
