import { DEFAULT_IMAGE } from '@/constants/images/default-image.constants';
import { Product } from '@/types/product.type';
import { getProductImages } from '@/utils/functions/product';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { ImageWatch } from '../atoms/image-watch.atom';
import { Button } from '../molecules/button.molecule';
import { RadioPicker } from '../molecules/radio-picker.molecule';

enum TypeUpdateImageEnum {
  NEXT = 'NEXT',
  PREVIOUS = 'PREVIOUS',
}

type ProductImageProps = {
  product: Product;
  variantId: string | null;
};

export const ProductImage: React.FC<ProductImageProps> = ({
  product,
  variantId,
}) => {
  const images = getProductImages(product, variantId);

  const [selectedImage, setSelectedImage] = useState<string>(
    images?.[0] || DEFAULT_IMAGE,
  );

  const handleUpdateImageIndex = (type: keyof typeof TypeUpdateImageEnum) => {
    const currentIndex = images?.indexOf(selectedImage);

    const newIndex =
      type === TypeUpdateImageEnum.NEXT
        ? (currentIndex + 1) % images?.length
        : (currentIndex - 1 + images?.length) % images?.length;

    setSelectedImage(images?.[newIndex]);
  };

  const handleShareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success('Link copied to clipboard!');
  };

  return (
    <>
      <div className="flex gap-2">
        <ImageWatch src={selectedImage} alt={product.name} />
        <div className="flex flex-col gap-2 justify-between">
          <Button icon="share" onClick={handleShareLink} />
          <div className="flex flex-col gap-2">
            <Button
              icon="chevron_left"
              onClick={() =>
                handleUpdateImageIndex(TypeUpdateImageEnum.PREVIOUS)
              }
            />
            <Button
              icon="chevron_right"
              onClick={() => handleUpdateImageIndex(TypeUpdateImageEnum.NEXT)}
            />
          </div>
        </div>
      </div>
      <RadioPicker
        options={images?.map((image) => ({
          label: image,
          value: image,
        }))}
        value={selectedImage}
        onSelect={setSelectedImage}
        type="IMAGE"
      />
    </>
  );
};
