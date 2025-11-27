import { ApiProperty } from '@nestjs/swagger';
import { ArrayNotEmpty, IsArray, IsNumber } from 'class-validator';

export class ProcessBillingLotsDto {
    @ApiProperty({ example: [1, 2, 3], description: 'Lista de IDs dos lotes a serem processados' })
    @IsArray()
    @ArrayNotEmpty()
    @IsNumber({}, { each: true })
    ids: number[];
}
