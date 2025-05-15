import React from 'react';

type IconAtomProps = {
  name: string;
  className?: string;
  color?: string;
};

export const Icon: React.FC<IconAtomProps> = ({
  name,
  color = 'text-secondary',
  className = '',
}) => {
  return (
    <i className={`material-icons-outlined ${color} ${className}`}>{name}</i>
  );
};
