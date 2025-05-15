import { formatCurrency } from '@/utils/formatter/currency';
import React from 'react';
import { Rating } from '../atoms/rating.atom';

type ProductTitleProps = {
  title: string;
  price: number;
};

export const ProductTitle: React.FC<ProductTitleProps> = ({ title, price }) => {
  return (
    <div className="flex flex-col items-start">
      <h1 className="text-lg font-bold text-primary">{title}</h1>
      <div className="flex items-center gap-2 justify-between w-full">
        <span className="text-xl text-secondary">{formatCurrency(price)}</span>
        <Rating value={4} />
      </div>
    </div>
  );
};
