import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { Product, ProductDocument } from './schemas/product.schema';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModule: Model<ProductDocument>,
  ) {}

  async getAll(): Promise<Product[]> {
    return this.productModule.find().exec();
  }

  async getById(id: string): Promise<Product> {
    return this.productModule.findById(id);
  }

  async create(productDto: CreateProductDto): Promise<Product> {
    const newProduct = new this.productModule(productDto);
    return newProduct.save();
  }

  async delete(id: string): Promise<Product> {
      return this.productModule.findByIdAndDelete(id)
  }

  async update(id: string, productDto: CreateProductDto): Promise<Product> {
      return this.productModule.findByIdAndUpdate(id, productDto);
  }
}
