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

    @Get()
    async getAll (): Promise<DocumentType<ProductModel>[]> {
        return await this.productService.getAll();
    }

    @Get(':id')
    async get (@Param('id') id: string): Promise<DocumentType<ProductModel>> | null {
        const product = await this.productService.get(id);

        if (!product) {
            throw new HttpException('Товар не найден', HttpStatus.NOT_FOUND);
        }

        return product;
    }

    @Delete(':id')
    async delete (@Param('id') id: string): Promise<DocumentType<ProductModel>> | null {
        return await this.productService.delete(id);
    }

    @Put(':id')
    async update (@Param('id') id: string, @Body() updateProductDto: UpdateProductDto): Promise<DocumentType<ProductModel>> {
        return await this.productService.update(id,updateProductDto);
    }
}
