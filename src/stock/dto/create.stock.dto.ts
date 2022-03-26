import { IsNumber, IsString, Min } from 'class-validator';

export class CreateStockDto {
    @IsString()
    product_id: string;

    @IsNumber()
    price: number;

    @Min(1)
    @IsNumber()
    quantity: number;

    @IsString()
    party_num: string;
}
