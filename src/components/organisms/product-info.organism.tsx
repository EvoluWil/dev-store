'use client';

import { useProducts } from '@/context/product.context';
import { filterDuplicate } from '@/utils/functions/array.util';
import { getProductPrice } from '@/utils/functions/product';
import { Button } from '../molecules/button.molecule';
import { ProductTitle } from '../molecules/product-title.molecule';
import { RadioPicker } from '../molecules/radio-picker.molecule';
import { ZipCodePicker } from '../molecules/zip-code-picker.molecule';

export const ProductInfo = () => {
  const { currentProduct, selectedVariant, handleSelectVariant } =
    useProducts();

  return (
    <div>
      <ProductTitle
        price={getProductPrice(currentProduct, selectedVariant?.id)}
        name={currentProduct.name}
        description={currentProduct.description}
        rating={currentProduct.rating}
      />
      <div className="flex flex-col gap-4">
        {currentProduct.has_variations && (
          <div className="flex flex-col gap-4">
            {currentProduct?.variationAttributes?.includes('color') && (
              <RadioPicker
                options={filterDuplicate(
                  currentProduct?.variations?.map((variant) => ({
                    label: variant?.attributes?.color?.label || '',
                    value: variant?.attributes?.color?.value || '',
                    id: variant?.attributes?.color?.id || '',
                  })) || [],
                  'id',
                )}
                label="Color"
                value={selectedVariant?.color || ''}
                onSelect={(value) => handleSelectVariant(value, 'color')}
                type="COLOR"
              />
            )}

            {currentProduct?.variationAttributes?.includes('size') && (
              <RadioPicker
                options={
                  currentProduct?.variations
                    ?.filter((variant) =>
                      !variant?.attributes?.color
                        ? true
                        : variant?.attributes?.color?.id ===
                          selectedVariant?.color,
                    )
                    .map((variant) => ({
                      label: variant?.attributes?.size?.label || '',
                      value: variant?.attributes?.size?.value || '',
                      id: variant?.attributes?.size?.id || '',
                    })) || []
                }
                label="Size"
                value={selectedVariant?.size || ''}
                onSelect={(value) => handleSelectVariant(value, 'size')}
                type="SIZE"
              />
            )}
          </div>
        )}
        <div className="flex gap-2 items-center justify-between mt-4">
          <Button onClick={() => {}} className="w-full">
            Add to Wishlist
          </Button>
          <Button onClick={() => {}} variant="OUTLINED" className="w-full">
            Compare
          </Button>
        </div>
        <ZipCodePicker
          placeholder="Enter your zip code to check delivery options and charges"
          onChangeValue={console.log}
        />
      </div>
    </div>
  );
};
