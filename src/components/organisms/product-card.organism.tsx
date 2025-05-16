'use client';

import { Product } from '@/types/product.type';
import {
  getProductDefaultVariant,
  getProductImages,
  getProductPrice,
} from '@/utils/functions/product.util';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ProductTitle } from '../molecules/product-title.molecule';

type ProductCardProps = {
  product: Product;
};

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { push } = useRouter();

  const defaultVariant = getProductDefaultVariant(product);

  const price = getProductPrice(product, defaultVariant?.id);

  const images = getProductImages(product, defaultVariant?.id);
  const image = images?.[0];

  return (
    <div
      className="flex flex-col bg-secondary rounded-lg cursor-pointer transition-all duration-500 hover:scale-98 active:scale-100"
      role="button"
      onClick={() => push(`/products/${product.id}`)}
    >
      <Image
        src={image}
        alt={product.name}
        className="w-full object-cover rounded-t-md"
        width={200}
        height={200}
      />
      <div className="flex flex-col p-1">
        <ProductTitle
          variant="LIST"
          showMoreButton={false}
          subTitleLimitChars={48}
          name={product.name}
          price={price}
          rating={product.rating}
          description={product.description}
        />
      </div>
    </div>
  );
};
