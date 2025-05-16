'use client';

import Image from 'next/image';
import React, { useRef, useState } from 'react';

type ImageWatchProps = {
  src: string;
  alt?: string;
};

export const ImageWatch: React.FC<ImageWatchProps> = ({
  src,
  alt = 'Image',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [zoomStyle, setZoomStyle] = useState<React.CSSProperties>({});
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: 'scale(2)',
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({});
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      ref={containerRef}
      className={`
      relative overflow-hidden rounded-md
      ${isHovered ? 'cursor-zoom-in' : ''} 
      w-[350px] xl:w-[30vw] h-[350px] xl:h-[30vw] max-w-[calc(100vw - 32px)] max-h-[calc(100vw - 32px)]
    `}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <Image
        src={src}
        alt={alt}
        className="object-contain transition-transform duration-200 ease-out pointer-events-none"
        style={zoomStyle}
        fill
      />
    </div>
  );
};
