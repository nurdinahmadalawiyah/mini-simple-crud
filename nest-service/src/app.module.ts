import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [CommonModule, CustomerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
