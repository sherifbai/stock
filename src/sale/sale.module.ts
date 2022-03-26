import { TypegooseModule } from 'nestjs-typegoose';
import { Module } from '@nestjs/common';
import { SaleModel } from './sale.model';

@Module({
    imports: [
        TypegooseModule.forFeature([
            {
                typegooseClass: SaleModel,
                schemaOptions: {
                    collection: 'Sale'
                }
            }
        ]),
    ],
    exports: [
        TypegooseModule.forFeature([
            {
                typegooseClass: SaleModel,
                schemaOptions: {
                    collection: 'Sale'
                }
            }
        ]),
    ],
})
export class SaleModule {}