import { IsNumber, IsString, Min } from 'class-validator';

export class SaleStockDto {
    @IsString()
    product_id: string;

    @Min(1)
    @IsNumber()
    quantity: number;
}
