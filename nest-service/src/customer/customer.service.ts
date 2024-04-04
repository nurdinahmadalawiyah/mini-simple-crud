import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { ValidationService } from '../common/validation.service';
import {
  CreateCustomerRequest,
  CustomerResponse,
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
}
