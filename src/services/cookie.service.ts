import { Address } from '@/types/address.type';
import { Variant } from '@/types/commons.type';
import { getCookie, hasCookie, setCookie } from 'cookies-next';

class CookieService {
  exists(key: string, type: 'product' | 'address'): boolean {
    return hasCookie(`@dev_store:${type}-${key}`) as boolean;
  }
  getProductVariant(productId: string): Variant | null {
    const variant = getCookie(`@dev_store:product-${productId}`) as string;
    return variant ? JSON.parse(variant) : null;
  }
  saveProductVariant(productId: string, variant: Variant): void {
    const variantString = JSON.stringify(variant);
    setCookie(`@dev_store:product-${productId}`, variantString, {
      maxAge: 60 * 15,
    });
  }
  getAddress(): Address | null {
    const address = getCookie(`@dev_store:address`) as string;
    return address ? JSON.parse(address) : null;
  }
  saveAddress(address: Address): void {
    const addressString = JSON.stringify(address);
    setCookie(`@dev_store:address`, addressString, {
      maxAge: 60 * 15,
    });
  }
}

export const cookieService = new CookieService();
