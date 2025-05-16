import { DEFAULT_IMAGE } from '@/constants/images/default-image.constants';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

enum TypeUpdateImageEnum {
  NEXT = 'NEXT',
  PREVIOUS = 'PREVIOUS',
}

type ProductImageHookProps = {
  images: string[];
};

export const useProductImage = ({ images }: ProductImageHookProps) => {
  const [selectedImage, setSelectedImage] = useState<string>(
    images?.[0] || DEFAULT_IMAGE,
  );

  const handleUpdateImage = (image: string) => {
    setSelectedImage(image);
  };

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

  useEffect(() => {
    if (images?.length > 0) {
      setSelectedImage(images[0]);
    }
  }, [images]);

  return {
    selectedImage,
    handleUpdateImage,
    handleUpdateImageIndex,
    handleShareLink,
  };
};
