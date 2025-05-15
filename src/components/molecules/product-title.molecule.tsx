import { formatCurrency } from '@/utils/formatter/currency';
import React, { useState } from 'react';
import { Divider } from '../atoms/divider.atom';
import { Rating } from '../atoms/rating.atom';

type ProductTitleProps = {
  title: string;
  subtitle?: string;
  subTitleLimitChars?: number;
  price: number;
};

export const ProductTitle: React.FC<ProductTitleProps> = ({
  title,
  subtitle = '',
  subTitleLimitChars = 200,
  price,
}) => {
  const [expanded, setExpanded] = useState(false);

  const isLong = subtitle.length > subTitleLimitChars;
  const displayedText = expanded
    ? subtitle
    : subtitle.slice(0, subTitleLimitChars);

  return (
    <div className="flex flex-col items-start">
      <h1 className="text-lg font-bold text-primary">{title}</h1>
      <div className="flex items-center gap-2 justify-between w-full">
        <span className="text-xl text-secondary">{formatCurrency(price)}</span>
        <Rating value={4} />
      </div>
      <Divider />
      <span className="text-primary font-bold">Description:</span>
      <p className="whitespace-pre-line">
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
