import { Product } from '@/types/product.type';
import {
  getProductPrice,
  getProductVariantsAttributes,
} from '@/utils/functions/product';
import { Button } from '../molecules/button.molecule';
import { ProductTitle } from '../molecules/product-title.molecule';
import { RadioPicker } from '../molecules/radio-picker.molecule';

type ProductInfoProps = {
  product: Product;
  variantId: string | null;
};

export const ProductInfo: React.FC<ProductInfoProps> = ({
  product,
  variantId,
}) => {
  return (
    <div>
      <ProductTitle
        price={getProductPrice(product, variantId)}
        name={product.name}
        description={
          product.description +
          product.description +
          product.description +
          product.description +
          product.description +
          product.description +
          product.description +
          product.description
        }
        rating={product.rating}
      />
      <div className="flex flex-col gap-4">
        {product.has_variations && (
          <div className="flex flex-col gap-4">
            {Object.entries(getProductVariantsAttributes(product)).map(
              ([attribute, options]) => (
                <RadioPicker
                  key={attribute}
                  options={options}
                  label={attribute}
                  value={variantId}
                  onSelect={console.log}
                  type={attribute === 'color' ? 'COLOR' : 'SIZE'}
                />
              ),
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
      </div>
    </div>
  );
};
