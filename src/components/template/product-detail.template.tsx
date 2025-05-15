import { PRODUCTS } from '@/constants/products/products.constants';
import { ProductImage } from '../organisms/product-image.organism';
import { ProductInfo } from '../organisms/product-info.organism';

export const ProductDetail = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex flex-col gap-2">
        <ProductImage
          product={PRODUCTS[0]}
          variantId={PRODUCTS?.[0]?.variations[0]?.id as string}
        />
      </div>
      <div>
        <ProductInfo
          product={PRODUCTS[0]}
          variantId={PRODUCTS?.[0]?.variations[0]?.id as string}
        />
      </div>
    </div>
  );
};
