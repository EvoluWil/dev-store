interface ColorBoxProps {
  color: string;
  tabIndex?: number;
  selected?: boolean;
  onClick: () => void;
}

export const ColorBox: React.FC<ColorBoxProps> = ({
  color,
  tabIndex = 0,
  selected = false,
  onClick,
}) => {
  const commonClasses =
    'transition-all transform active:scale-90 active:opacity-80 cursor-pointer rounded';

  if (selected) {
    return (
      <div className={`border-2 border-secondary p-0.5 w-fit ${commonClasses}`}>
        <div
          className={`w-16 h-6 ${commonClasses}`}
          style={{ backgroundColor: color }}
          tabIndex={tabIndex}
          onClick={onClick}
        />
      </div>
    );
  }

  return (
    <div
      className={`w-18 h-8 ${commonClasses}`}
      style={{ backgroundColor: color }}
      tabIndex={tabIndex}
      onClick={onClick}
    />
  );
};
