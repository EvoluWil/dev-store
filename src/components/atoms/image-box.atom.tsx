import Image from 'next/image';

type ImageBoxProps = {
  src: string;
  alt?: string;
  tabIndex?: number;
  selected?: boolean;
  onClick: () => void;
};

export const ImageBox: React.FC<ImageBoxProps> = ({
  src,
  alt = 'image',
  tabIndex = 0,
  selected = false,
  onClick,
}) => {
  const commonClasses =
    'transition-all transform active:scale-90 active:opacity-80 cursor-pointer rounded overflow-hidden';

  if (selected) {
    return (
      <div className={`border-2 border-primary p-0.5 w-fit ${commonClasses}`}>
        <div
          className="w-17 h-17"
          tabIndex={tabIndex}
          onClick={onClick}
          role="button"
        >
          <Image
            src={src}
            alt={alt}
            width={75}
            height={75}
            className="scale-99"
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`w-19 h-19 ${commonClasses}`}
      tabIndex={tabIndex}
      onClick={onClick}
      role="button"
    >
      <Image src={src} alt={alt} width={75} height={75} />
    </div>
  );
};
