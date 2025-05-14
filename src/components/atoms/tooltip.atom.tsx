import React, { PropsWithChildren } from 'react';

interface TooltipProps {
  title: string;
}

export const Tooltip: React.FC<PropsWithChildren<TooltipProps>> = ({
  title,
  children,
}) => {
  return (
    <div className="relative group inline-block">
      {children}
      <div
        className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2
                   w-max bg-black text-white text-xs rounded py-1 px-2
                   opacity-0 group-hover:opacity-100 transition-opacity
                   pointer-events-none z-10 whitespace-nowrap"
      >
        {title}
      </div>
    </div>
  );
};
