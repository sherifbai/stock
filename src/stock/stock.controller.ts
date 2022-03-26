import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { StockService } from './stock.service';
import { CreateStockDto } from './dto/create.stock.dto';
import { SaleStockDto } from './dto/sale.stock.dto';
import { IAddResponse } from './types/add.response.interface';
import { ISellResponse } from './types/sell.response.interface';
import { ILeftResponse } from './types/left.response.interface';
import { ISoldResponse } from './types/sold.response.interface';

@Controller('stock')
export class StockController {
    constructor(private readonly stockService: StockService) {}

    @UsePipes(new ValidationPipe())
    @Post('add')
    async add (@Body() createStockDto: CreateStockDto): Promise<IAddResponse> {
        return this.stockService.add(createStockDto);
    }

    @UsePipes(new ValidationPipe())
    @Post('sell')
    async sell (@Body() saleStockDto: SaleStockDto): Promise<ISellResponse> {
        return this.stockService.sell(saleStockDto);
    }

    @Get('left')
    async left (): Promise<ILeftResponse> {
        return this.stockService.left();
    }

    @Get('sold')
    async sold (): Promise<ISoldResponse> {
        return this.stockService.sold();
    }
}
