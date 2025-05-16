'use client';

import { PRODUCTS } from '@/constants/products/products.constants';
import { Variant } from '@/types/commons.type';
import { Product } from '@/types/product.type';
import {
  getProductDefaultVariant,
  getProductImages,
} from '@/utils/functions/product';
import { useParams } from 'next/navigation';
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

type ProductContextType = {
  currentProduct: Product;
  selectedVariant: Variant;
  images: string[];
  handleSelectVariant: (value: string, type: 'color' | 'size') => void;
};

const ProductContext = createContext<ProductContextType>(
  {} as ProductContextType,
);

const ProductProvider = ({ children }: { children: ReactNode }) => {
  const { productId } = useParams<{ productId: string }>();
  const currentProduct = PRODUCTS?.find((p) => p.id === productId) as Product;

  const [selectedVariant, setSelectedVariant] = useState(
    getProductDefaultVariant(currentProduct),
  );

  const handleSelectVariant = useCallback(
    (value: string, type: 'color' | 'size') => {
      const variant = currentProduct?.variations?.find(
        (variant) => variant?.attributes?.[type]?.id === value,
      );

      if (!variant) {
        return;
      }

      const newVariant: Variant = {
        id: variant.id,
        color: null,
        size: null,
      };

      if (variant?.attributes?.color) {
        newVariant.color = variant?.attributes?.color?.id;
      }

      if (variant?.attributes?.size) {
        newVariant.size = variant?.attributes?.size?.id;
      }

      setSelectedVariant(newVariant);
    },
    [currentProduct],
  );

  const images = getProductImages(currentProduct, selectedVariant?.id);

  const valueProvider = useMemo(
    () => ({
      currentProduct,
      selectedVariant,
      images,
      handleSelectVariant,
    }),
    [currentProduct, selectedVariant, images, handleSelectVariant],
  );

  return (
    <ProductContext.Provider value={valueProvider}>
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};

export { ProductProvider, useProducts };
