import { TypegooseModule } from 'nestjs-typegoose';
import { Module } from '@nestjs/common';
import { WarehouseModel } from './warehouse.model';

@Module({
    imports: [
        TypegooseModule.forFeature([
            {
                typegooseClass: WarehouseModel,
                schemaOptions: {
                    collection: 'Warehouse'
                }
            }
        ]),
    ],
    exports: [
        TypegooseModule.forFeature([
            {
                typegooseClass: WarehouseModel,
                schemaOptions: {
                    collection: 'Warehouse'
                }
            }
        ]),
    ],
})
export class WarehouseModule {}