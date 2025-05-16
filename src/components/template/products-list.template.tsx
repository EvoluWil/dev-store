import { PRODUCTS } from '@/constants/products/products.constants';
import { ProductCard } from '../organisms/product-card.organism';

type ProductDetailParam = {
  productId: string;
};

export const ProductsListTemplate = ({ productId }: ProductDetailParam) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Related Products</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {PRODUCTS.filter((item) => item.id !== productId).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
