import React from 'react';
import { Icon } from './icon.atom';

type RatingProps = {
  value: number;
};

export const Rating: React.FC<RatingProps> = ({ value }) => {
  return (
    <div className="flex items-center space-x-1">
      <Icon name="star" className="!text-xl" color="text-yellow-500" />
      <span className="text-lg text-secondary">{value?.toFixed(1)}</span>
    </div>
  );
};
