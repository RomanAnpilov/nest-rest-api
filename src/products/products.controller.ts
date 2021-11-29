import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductsService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller("products")
export class ProductsController {

    constructor(private productService: ProductsService) {}

    @Get()
    getAll() {
        return this.productService.getAll()
    }

    @Get(":id")
    getById(@Param("id") id:string) {
        return this.productService.getById(id)
    }

    @Post()
    pushProduct(@Body() product: CreateProductDto) {
        return this.productService.create(product)
    }

    @Delete(":id")
    deleteProduct(@Param("id") id:string) {
        return this.productService.delete(id)
    }

    @Put(":id")
    updateProduct(@Body() product: CreateProductDto, @Param("id") id) {
        return this.productService.update(id, product)
    }
}
