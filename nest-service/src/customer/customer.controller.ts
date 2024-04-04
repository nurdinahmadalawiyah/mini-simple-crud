import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import {
  CreateCustomerRequest,
  CustomerResponse,
  UpdateCustomerRequest,
} from '../model/customer.model';

@Controller('/api/customer')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Post()
  async create(
    @Body() request: CreateCustomerRequest,
  ): Promise<CustomerResponse> {
    return await this.customerService.create(request);
  }

  @Get()
  async get(): Promise<CustomerResponse[]> {
    return await this.customerService.get();
  }

  @Put(':no')
  async updateCustomer(
    @Param('no') no: number,
    @Body() request: UpdateCustomerRequest,
  ): Promise<CustomerResponse> {
    return await this.customerService.update(no, request);
  }

  @Delete(':no')
  async deleteCustomer(@Param('no') no: number): Promise<CustomerResponse> {
    return await this.customerService.deleteCustomer(no);
  }
}
