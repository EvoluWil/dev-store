import { DEFAULT_IMAGE } from '@/constants/images/default-image.constants';
import { Option } from '@/types/commons.type';
import { Product } from '@/types/product.type';

export const getProductDefaultVariant = (product: Product): string | null => {
  if (!product?.has_variations) {
    return null;
  }

  const defaultVariant = product?.variations?.find(
    (variant) => variant.default,
  );

  if (defaultVariant) {
    return defaultVariant.id;
  }

  return product?.variations?.[0]?.id || null;
};

export const getProductImages = (
  product: Product,
  selectedVariant: string | null,
): string[] => {
  const defaultImage = [DEFAULT_IMAGE];

  if (!product?.has_variations) {
    return product?.images?.length ? product?.images : defaultImage;
  }

  if (!selectedVariant) {
    return defaultImage;
  }

  const variant = product?.variations?.find(
    (variant) => variant.id === selectedVariant,
  );

  const color = variant?.attributes?.color?.value;
  if (!color) {
    return defaultImage;
  }

  const imagesByAttribute = product?.imagesByAttribute?.color;
  const images = imagesByAttribute?.[color];
  if (images?.length) {
    return images;
  }

  return defaultImage;
};

export const getProductPrice = (
  product: Product,
  selectedVariant: string | null,
): number => {
  if (!product?.has_variations) {
    return product?.price || 0;
  }

  const variant = product?.variations?.find(
    (variant) => variant.id === selectedVariant,
  );

  return variant?.price || 0;
};

export const getProductVariantsAttributes = (
  product: Product,
): Record<string, Option[]> => {
  const result: Record<string, Option[]> = {};

  if (!product?.has_variations || !product?.variations?.length) {
    return result;
  }

  for (const variation of product.variations) {
    const attributes = variation.attributes;

    for (const key in attributes) {
      if (!result[key]) result[key] = [];

      const alreadyExists = result[key].some(
        (attr) =>
          JSON.stringify(attr) ===
          JSON.stringify(attributes[key as keyof typeof attributes]),
      );

      if (!alreadyExists) {
        const attributeValue = attributes[key as keyof typeof attributes];
        if (attributeValue) {
          result[key].push(attributeValue as Option);
        }
      }
    }
  }

  return result;
};
