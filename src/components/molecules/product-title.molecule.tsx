'use client';

import { formatCurrency } from '@/utils/formatter/currency';
import React, { useState } from 'react';
import { Divider } from '../atoms/divider.atom';
import { Rating } from '../atoms/rating.atom';

enum ProductTitleVariant {
  CARD = 'CARD',
  LIST = 'LIST',
}

type ProductTitleProps = {
  name: string;
  price: number;
  rating: number;
  description?: string;
  subTitleLimitChars?: number;
  showMoreButton?: boolean;
  variant?: keyof typeof ProductTitleVariant;
};

export const ProductTitle: React.FC<ProductTitleProps> = ({
  name,
  price,
  rating,
  description = '',
  subTitleLimitChars = 200,
  variant = ProductTitleVariant.CARD,
  showMoreButton = true,
}) => {
  const [expanded, setExpanded] = useState(false);

  const isLong = description.length > subTitleLimitChars;
  const displayedText = expanded
    ? description
    : description.slice(0, subTitleLimitChars);

  return (
    <div className="product-info-grid">
      <h1
        className={`area-title text-lg font-bold text-primary overflow-hidden text-ellipsis ${
          variant === 'LIST' ? 'whitespace-nowrap' : 'whitespace-normal'
        }`}
      >
        {name}
      </h1>
      <span className="area-value text-xl text-secondary">
        {formatCurrency(price)}
      </span>
      <span className="area-rating ml-auto my-auto">
        <Rating
          value={rating}
          size={variant === ProductTitleVariant.CARD ? 'large' : 'small'}
        />
      </span>

      <Divider className={`area-divider ${variant === 'LIST' && '!my-1'}`} />

      <div className="area-description">
        {variant === ProductTitleVariant.CARD && (
          <span className="area-description">Description:</span>
        )}
        <p
          className={`whitespace-pre-line text-secondary ${
            variant === 'CARD' ? 'min-h-25' : 'min-h-0'
          }`}
        >
          {displayedText}
          {isLong && !expanded && '...'}
          {isLong && showMoreButton && (
            <button
              className="mt-2 mx-2 text-blue-500 hover:underline text-sm"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? 'Show less' : 'Show more'}
            </button>
          )}
        </p>
      </div>
    </div>

    // <div className="flex flex-col items-start gap-4">
    //   <h1 className="text-lg font-bold text-primary">{name}</h1>
    //   <div className="flex items-center gap-2 justify-between w-full">
    //     <span className="text-xl text-secondary">{formatCurrency(price)}</span>
    //     <Rating value={rating} />
    //   </div>
    //   <Divider />
    // </div>
  );
};
