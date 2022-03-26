import { WarehouseModel } from 'src/warehouse/warehouse.model';
import { ProductModel } from 'src/product/product.model';

export interface IAddResponse {
    product: ProductModel;
    warehouse: WarehouseModel
}
