import React from 'react';
import { Icon } from './icon.atom';

type RatingProps = {
  value: number;
  size?: 'small' | 'medium' | 'large';
};

export const Rating: React.FC<RatingProps> = ({ value, size = 'medium' }) => {
  const sizeClasses = {
    small: '!text-sm',
    medium: '!text-base',
    large: '!text-lg',
  };

  return (
    <div className={`flex items-center space-x-1 ${sizeClasses[size]}`}>
      <Icon name="star" className={sizeClasses[size]} color="text-yellow-500" />
      <span className={`${sizeClasses[size]} text-secondary`}>
        {value?.toFixed(1)}
      </span>
    </div>
  );
};
