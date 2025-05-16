'use client';

import { useProductImage } from '@/hooks/product-image.hook';
import { ImageWatch } from '../atoms/image-watch.atom';
import { Button } from '../molecules/button.molecule';
import { RadioPicker } from '../molecules/radio-picker.molecule';

enum TypeUpdateImageEnum {
  NEXT = 'NEXT',
  PREVIOUS = 'PREVIOUS',
}

export const ProductImage = () => {
  const {
    selectedImage,
    handleUpdateImage,
    handleUpdateImageIndex,
    handleShareLink,
    currentProduct,
    images,
  } = useProductImage();
  return (
    <>
      <div className="flex gap-4">
        <ImageWatch src={selectedImage} alt={currentProduct?.name} />
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
          id: image,
        }))}
        value={selectedImage}
        onSelect={handleUpdateImage}
        type="IMAGE"
      />
    </>
  );
};
