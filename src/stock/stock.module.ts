import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { ProductModel } from 'src/product/product.model';
import { SaleModel } from 'src/sale/sale.model';
import { WarehouseModel } from 'src/warehouse/warehouse.model';
import { StockController } from './stock.controller';
import { StockService } from './stock.service';

@Module({
    imports: [
        TypegooseModule.forFeature([
            {
                typegooseClass: WarehouseModel,
                schemaOptions: {
                    collection: 'Warehouse',
                },
            },
            {
                typegooseClass: ProductModel,
                schemaOptions: {
                    collection: 'Product',
                },
            },
            {
                typegooseClass: SaleModel,
                schemaOptions: {
                    collection: 'Sale',
                },
            },
        ]),
    ],
    controllers: [StockController],
    providers: [StockService],
})
export class StockModule {}