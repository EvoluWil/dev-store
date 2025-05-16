import { Divider } from '@/components/atoms/divider.atom';
import { ProductDetail } from '@/components/template/product-detail.template';
import { ProductsListTemplate } from '@/components/template/products-list.template';

export default function Home() {
  return (
    <div className="px-8 max-w-screen-xl mx-auto w-full">
      <ProductDetail />
      <Divider />
      <ProductsListTemplate />
    </div>
  );
}
