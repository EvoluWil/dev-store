import React from 'react';

type IconAtomProps = {
  name: string;
  className?: string;
};

export const Icon: React.FC<IconAtomProps> = ({ name, className = '' }) => {
  return (
    <i className={`material-icons-outlined text-secondary ${className}`}>
      {name}
    </i>
  );
};
