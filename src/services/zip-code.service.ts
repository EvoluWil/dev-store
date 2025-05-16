import { Address } from '@/types/address.type';

class ZipCodeService {
  public async checkDelivery(zipCode: string): Promise<Address> {
    const response = await fetch(`https://viacep.com.br/ws/${zipCode}/json/`);
    const data = await response.json();
    return data;
  }
}

export const zipCodeService = new ZipCodeService();
