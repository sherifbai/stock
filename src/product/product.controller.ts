import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { DocumentType } from '@typegoose/typegoose';
import { CreateProductDto } from './dto/create.product.dto';
import { UpdateProductDto } from './dto/update.product.dto';
import { ProductModel } from './product.model';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @UsePipes(new ValidationPipe())
    @Post('')
    async create (@Body() productDto: CreateProductDto): Promise<DocumentType<ProductModel>> {
        return await this.productService.create(productDto);
    }
}
