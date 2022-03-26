import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { ProductModel } from 'src/product/product.model';

export interface WarehouseModel extends Base {}
export class WarehouseModel extends TimeStamps {
    @prop()
    quantity: number; 

    @prop()
    price: number;

    @prop({ ref: () => ProductModel })
    product_id: string;

    @prop({ unique: true })
    party_num: string;
}
