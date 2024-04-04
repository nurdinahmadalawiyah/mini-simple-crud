import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { ValidationService } from '../common/validation.service';
import {
  CreateCustomerRequest,
  CustomerResponse,
  UpdateCustomerRequest,
} from '../model/customer.model';
import { CustomerValidation } from './customer.validation';

@Injectable()
export class CustomerService {
  constructor(
    private prismaService: PrismaService,
    private validationService: ValidationService,
  ) {}

  async create(request: CreateCustomerRequest): Promise<CustomerResponse> {
    const createRequest: CreateCustomerRequest =
      this.validationService.validate(CustomerValidation.CREATE, request);

    const customer = await this.prismaService.customer.create({
      data: { ...createRequest },
    });

    return {
      no: customer.no,
      nama: customer.nama,
      alamat: customer.alamat,
      kota: customer.kota,
    };
  }

  async get(): Promise<CustomerResponse[]> {
    const customer = await this.prismaService.customer.findMany();
    return customer.map((customer) => ({
      no: customer.no,
      nama: customer.nama,
      alamat: customer.alamat,
      kota: customer.kota,
    }));
  }

  async update(
    no: number,
    request: UpdateCustomerRequest,
  ): Promise<CustomerResponse> {
    const customerId = parseInt(String(no));
    const existingCustomer = await this.prismaService.customer.findUnique({
      where: { no: customerId },
    });
    if (!existingCustomer) {
      throw new NotFoundException(`Customer with number ${no} not found`);
    }

    const updateRequest: UpdateCustomerRequest =
      this.validationService.validate(CustomerValidation.CREATE, request);

    const updatedCustomer = await this.prismaService.customer.update({
      where: { no: customerId },
      data: updateRequest,
    });

    return {
      no: updatedCustomer.no,
      nama: updatedCustomer.nama,
      alamat: updatedCustomer.alamat,
      kota: updatedCustomer.kota,
    };
  }
  async deleteCustomer(no: number): Promise<CustomerResponse> {
    const customerId = parseInt(String(no));
    const existingCustomer = await this.prismaService.customer.findUnique({
      where: { no: customerId },
    });

    if (!existingCustomer) {
      throw new NotFoundException(`Customer with number ${no} not found`);
    }

    const deletedCustomer = await this.prismaService.customer.delete({
      where: { no: customerId },
    });

    return {
      no: deletedCustomer.no,
      nama: deletedCustomer.nama,
      alamat: deletedCustomer.alamat,
      kota: deletedCustomer.kota,
    };
  }
}
