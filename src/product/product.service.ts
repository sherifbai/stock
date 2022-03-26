import { Injectable } from '@nestjs/common';
import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { CreateProductDto } from './dto/create.product.dto';
import { UpdateProductDto } from './dto/update.product.dto';
import { ProductModel } from './product.model';

@Injectable()
export class ProductService {
    constructor(@InjectModel(ProductModel) private readonly productModel: ModelType<ProductModel>) {}


    async create (createProductDto: CreateProductDto): Promise<DocumentType<ProductModel>> {
        return await this.productModel.create(createProductDto);
    }

    async getAll (): Promise<DocumentType<ProductModel>[]> {
        return await this.productModel.find().sort({ createdAt: -1 });
    }

    async get (id: string): Promise<DocumentType<ProductModel>> | null {
        return await this.productModel.findById(id);
    }

    async delete (id: string): Promise<DocumentType<ProductModel>> | null {
        return await this.productModel.findByIdAndDelete(id).exec();
    }

    async update(id: string, updateProductDto: UpdateProductDto): Promise<DocumentType<ProductModel>> {
        return await this.productModel.findByIdAndUpdate(id, updateProductDto).exec();
    }
}
