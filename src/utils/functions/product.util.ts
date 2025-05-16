import { DEFAULT_IMAGE } from '@/constants/images/default-image.constants';
import { Option, Variant } from '@/types/commons.type';
import { Product } from '@/types/product.type';

export const getProductDefaultVariant = (product: Product): Variant => {
  const variant: Variant = {
    id: null,
    color: null,
    size: null,
    quantity: product?.quantity || 0,
  };

  if (!product?.has_variations) {
    return variant;
  }

  const defaultVariant = product?.variations?.find(
    (variant) => variant.default,
  );

  if (!defaultVariant) {
    return variant;
  }

  variant.id = defaultVariant?.id;
  variant.quantity = defaultVariant?.quantity || 0;

  if (defaultVariant?.attributes?.color) {
    variant.color = defaultVariant?.attributes?.color?.id;
  }

  if (defaultVariant?.attributes?.size) {
    variant.size = defaultVariant?.attributes?.size?.id;
  }

  return variant;
};

export const getProductImages = (
  product: Product,
  selectedVariantId: string | null,
): string[] => {
  const defaultImage = [DEFAULT_IMAGE];

  if (!product?.has_variations) {
    return product?.images?.length ? product?.images : defaultImage;
  }

  if (!selectedVariantId) {
    return defaultImage;
  }

  const variant = product?.variations?.find(
    (variant) => variant.id === selectedVariantId,
  );

  const color = variant?.attributes?.color?.id;
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
  selectedVariantId: string | null,
): number => {
  if (!product?.has_variations) {
    return product?.price || 0;
  }

  const variant = product?.variations?.find(
    (variant) => variant.id === selectedVariantId,
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
