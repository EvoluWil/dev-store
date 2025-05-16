type SizeBoxProps = {
  label: string;
  tabIndex?: number;
  selected?: boolean;
  onClick: () => void;
  disabled?: boolean;
};

export const SizeBox: React.FC<SizeBoxProps> = ({
  label,
  tabIndex = 0,
  selected = false,
  onClick,
  disabled = false,
}) => {
  return (
    <div
      className={`w-18 h-8 flex items-center justify-center bg-secondary transition-all transform active:scale-90 active:opacity-80 cursor-pointer rounded border-2 ${
        selected ? 'border-primary' : 'border-secondary'
      } ${disabled ? ' opacity-50 !cursor-not-allowed' : ''} `}
      tabIndex={tabIndex}
      onClick={!disabled ? onClick : undefined}
      role="button"
    >
      <span>{label}</span>
    </div>
  );
};
