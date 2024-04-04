import { z, ZodType } from 'zod';

export class CustomerValidation {
  static readonly CREATE: ZodType = z.object({
    nama: z.string().min(1).max(50),
    alamat: z.string().min(1).max(255),
    kota: z.string().min(1).max(50),
  });
}
