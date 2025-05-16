import { Divider } from '@/components/atoms/divider.atom';
import { ProductDetail } from '@/components/template/product-detail.template';
import { ProductsListTemplate } from '@/components/template/products-list.template';

type ProductDetailParam = {
  params: Promise<{ productId: string }>;
};

export default async function Products({ params }: ProductDetailParam) {
  const { productId } = await params;
  return (
    <div className="px-8 max-w-screen-xl mx-auto w-full">
      <ProductDetail />
      <Divider />
      <ProductsListTemplate productId={productId} />
    </div>
  );
}
