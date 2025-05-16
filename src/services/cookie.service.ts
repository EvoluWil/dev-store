import { Address } from '@/types/address.type';
import { Variant } from '@/types/commons.type';
import { deleteCookie, getCookie, hasCookie, setCookie } from 'cookies-next';

class CookieService {
  productExists(key: string): boolean {
    return hasCookie(`@dev_store:product-${key}`) as boolean;
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
  removeAddress(): void {
    deleteCookie('@dev_store:address');
  }
}

export const cookieService = new CookieService();
