import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { ProductModel } from 'src/product/product.model';
import { SaleModel } from 'src/sale/sale.model';
import { WarehouseModel } from 'src/warehouse/warehouse.model';
import { CreateStockDto } from './dto/create.stock.dto';
import { SaleStockDto } from './dto/sale.stock.dto';
import { IAddResponse } from './types/add.response.interface';
import { ISellResponse } from './types/sell.response.interface';
import { ILeftResponse } from './types/left.response.interface';
import { ISoldResponse } from './types/sold.response.interface';

@Injectable()
export class StockService {
  constructor(
    @InjectModel(ProductModel)
    private readonly productModel: ModelType<ProductModel>,
    @InjectModel(WarehouseModel)
    private readonly warehouseModel: ModelType<WarehouseModel>,
    @InjectModel(SaleModel) private readonly saleModel: ModelType<SaleModel>,
  ) {}

  async add({
    product_id,
    price,
    quantity,
    party_num,
  }: CreateStockDto): Promise<IAddResponse> {
    const product = await this.productModel.findById(product_id);
    if (!product) {
      throw new HttpException('Товар не найден', HttpStatus.NOT_FOUND);
    }

    const warehouse = await this.warehouseModel.create({
      quantity: quantity,
      price: price,
      product_id: product._id,
      party_num: party_num,
    });

    return { product, warehouse };
  }

  async sell({ product_id, quantity }: SaleStockDto): Promise<ISellResponse> {
    const warehouse = await this.warehouseModel
      .findOne({ product_id })
      .sort({ createdAt: -1 });
    if (!warehouse) {
      throw new HttpException('Товара нету в складе', HttpStatus.NOT_FOUND);
    }

    const count = warehouse.quantity - quantity;

    if (!(count >= 0)) {
      throw new HttpException(
        'Число товаров меньше ожидаемого',
        HttpStatus.BAD_REQUEST,
      );
    }
    await warehouse.updateOne({ quantity: count });

    const sale = await this.saleModel.create({ product_id, quantity });

    return { sale };
  }

  async left(): Promise<ILeftResponse> {
    const products = await this.warehouseModel
      .find()
      .populate('product_id')
      .sort({ createdAt: -1 });

    return { products };
  }

  async sold(): Promise<ISoldResponse> {
    const sold = await this.saleModel
      .find()
      .populate('product_id')
      .sort({ createdAt: -1 });

    return { sold };
  }
}
