import { prop } from '@typegoose/typegoose';
import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses';
import { ProductModel } from 'src/product/product.model';

export interface SaleModel extends Base {}
export class SaleModel extends TimeStamps {
    @prop({ ref: () => ProductModel })
    product_id: string;

    @prop()
    quantity: number;
}
