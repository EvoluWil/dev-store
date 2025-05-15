import React, { PropsWithChildren } from 'react';
import { Icon } from '../atoms/icon.atom';

enum ButtonVariantEnum {
  CONTAINED = 'CONTAINED',
  OUTLINED = 'OUTLINED',
}

type ButtonProps = {
  onClick?: () => void;
  className?: string;
  icon?: string;
  size?: number;
  variant?: keyof typeof ButtonVariantEnum;
};

export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  icon,
  onClick,
  children,
  className = '',
  variant = ButtonVariantEnum.CONTAINED,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center p-2 rounded cursor-pointer transition-all transform hover:opacity-90 active:opacity-80 active:scale-90 focus:outline-none ${
        variant === ButtonVariantEnum.CONTAINED ? 'bg-secondary' : ''
      } border border-secondary ${className}`}
    >
      {icon && <Icon name={icon} className={children ? 'mr-1' : ''} />}
      {children}
    </button>
  );
};
