export class CustomerResponse {
  no: number;
  nama: string;
  alamat?: string;
  kota?: string;
}

export class CreateCustomerRequest {
  nama: string;
  alamat: string;
  kota: string;
}
