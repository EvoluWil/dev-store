import { ProductImage } from '../organisms/product-image.organism';
import { ProductInfo } from '../organisms/product-info.organism';

export const ProductDetail = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex flex-col gap-4">
        <ProductImage />
      </div>
      <div>
        <ProductInfo />
      </div>
    </div>
  );
};
