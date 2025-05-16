import { Divider } from '@/components/atoms/divider.atom';
import { ProductCard } from '@/components/organisms/product-card.organism';
import { ProductDetail } from '@/components/template/product-detail.template';
import { PRODUCTS } from '@/constants/products/products.constants';

export default function Home() {
  return (
    <div className="px-8 max-w-screen-xl mx-auto w-full">
      <ProductDetail />
      <Divider />
      <div className="flex flex-col gap-4 max-w-60">
        <ProductCard product={PRODUCTS[0]} />
      </div>
    </div>
  );
}
