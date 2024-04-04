import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import {
  CreateCustomerRequest,
  CustomerResponse,
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
}
