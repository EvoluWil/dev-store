import { formatCurrency } from '@/utils/formatter/currency';
import React, { useState } from 'react';
import { Divider } from '../atoms/divider.atom';
import { Rating } from '../atoms/rating.atom';

type ProductTitleProps = {
  name: string;
  price: number;
  rating: number;
  description?: string;
  subTitleLimitChars?: number;
};

export const ProductTitle: React.FC<ProductTitleProps> = ({
  name,
  price,
  rating,
  description = '',
  subTitleLimitChars = 200,
}) => {
  const [expanded, setExpanded] = useState(false);

  const isLong = description.length > subTitleLimitChars;
  const displayedText = expanded
    ? description
    : description.slice(0, subTitleLimitChars);

  return (
    <div className="flex flex-col items-start gap-4">
      <h1 className="text-lg font-bold text-primary">{name}</h1>
      <div className="flex items-center gap-2 justify-between w-full">
        <span className="text-xl text-secondary">{formatCurrency(price)}</span>
        <Rating value={rating} />
      </div>
      <Divider />
      <span className="text-primary font-bold">Description:</span>
      <p className="whitespace-pre-line min-h-25">
        {displayedText}
        {isLong && !expanded && '...'}
        {isLong && (
          <button
            className="mt-2 mx-2 text-blue-500 hover:underline text-sm"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'Show less' : 'Show more'}
          </button>
        )}
      </p>
    </div>
  );
};
