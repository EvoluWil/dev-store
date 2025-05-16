type ColorBoxProps = {
  color: string;
  tabIndex?: number;
  selected?: boolean;
  onClick: () => void;
  disabled?: boolean;
};

export const ColorBox: React.FC<ColorBoxProps> = ({
  color,
  tabIndex = 0,
  selected = false,
  onClick,
  disabled = false,
}) => {
  const commonClasses =
    'transition-all transform active:scale-90 active:opacity-80 cursor-pointer rounded';

  if (selected) {
    return (
      <div className={`border-2 border-primary p-0.5 w-fit ${commonClasses}`}>
        <div
          className={`w-16 h-6 ${commonClasses}`}
          style={{ backgroundColor: color }}
          tabIndex={tabIndex}
          onClick={onClick}
          role="button"
        />
      </div>
    );
  }

  return (
    <div
      className={`w-18 h-8 border-2 border-secondary ${commonClasses} ${
        disabled ? ' opacity-50 !cursor-not-allowed' : ''
      }`}
      style={{ backgroundColor: color }}
      tabIndex={tabIndex}
      onClick={!disabled ? onClick : undefined}
      role="button"
    />
  );
};
