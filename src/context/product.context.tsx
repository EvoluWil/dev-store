'use client';

import { PRODUCTS } from '@/constants/products/products.constants';
import { cookieService } from '@/services/cookie.service';
import { zipCodeService } from '@/services/zip-code.service';
import { Address } from '@/types/address.type';
import { Variant } from '@/types/commons.type';
import { Product } from '@/types/product.type';
import {
  getProductDefaultVariant,
  getProductImages,
} from '@/utils/functions/product.util';
import { useParams } from 'next/navigation';
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { toast } from 'react-toastify';

type ProductContextType = {
  currentProduct: Product;
  selectedVariant: Variant;
  address: Address | null;
  images: string[];
  loading: boolean;
  handleSelectVariant: (value: string, type: 'color' | 'size') => void;
  handleAddToWishlist: () => void;
  handleAddToCart: () => void;
  handleUpdateZipCode: (zipCode?: string) => void;
};

const ProductContext = createContext<ProductContextType>(
  {} as ProductContextType,
);

const ProductProvider = ({ children }: { children: ReactNode }) => {
  const { productId } = useParams<{ productId: string }>();
  const currentProduct = PRODUCTS?.find((p) => p.id === productId) as Product;

  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState<Address | null>(null);

  const [tempVariant, setTempVariant] = useState<Variant | null>(null);

  const selectedVariant = useMemo(() => {
    if (
      !tempVariant ||
      currentProduct?.variations?.every(
        (variant) => variant.id !== tempVariant?.id,
      )
    ) {
      return getProductDefaultVariant(currentProduct);
    }

    return tempVariant;
  }, [currentProduct, tempVariant]);

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

      cookieService.saveProductVariant(productId, newVariant);
      setTempVariant(newVariant);
    },
    [currentProduct?.variations, productId],
  );

  const handleCheckDelivery = useCallback(
    async (zipCode: string): Promise<void> => {
      try {
        setLoading(true);
        const result = await zipCodeService.checkDelivery(zipCode);

        if (result?.erro) {
          throw new Error('Invalid zip code');
        }

        cookieService.saveAddress(result);
        setAddress(result);
      } catch {
        toast.error(
          'Error while checking delivery. Please verify the zip code and try again.',
        );
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  const handleUpdateZipCode = useCallback(
    (zipCode?: string) => {
      if (zipCode) {
        return handleCheckDelivery(zipCode);
      }

      setAddress(null);
      cookieService.removeAddress();
    },
    [handleCheckDelivery],
  );

  const handleAddToWishlist = useCallback(() => {
    toast.success('Product added to wishlist');
  }, []);

  const handleAddToCart = useCallback(() => {
    toast.success('Product added to cart');
  }, []);

  const images = getProductImages(currentProduct, selectedVariant?.id);

  useEffect(() => {
    if (cookieService.productExists(productId)) {
      const savedVariant = cookieService.getProductVariant(productId);
      if (savedVariant) {
        setTempVariant(savedVariant);
      }
    }

    const savedAddress = cookieService.getAddress();
    if (savedAddress) {
      setAddress(savedAddress);
    }
  }, [productId]);

  const valueProvider = useMemo(
    () => ({
      currentProduct,
      selectedVariant,
      address,
      images,
      loading,
      handleSelectVariant,
      handleAddToWishlist,
      handleAddToCart,
      handleUpdateZipCode,
    }),
    [
      currentProduct,
      selectedVariant,
      address,
      images,
      loading,
      handleSelectVariant,
      handleAddToWishlist,
      handleAddToCart,
      handleUpdateZipCode,
    ],
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
