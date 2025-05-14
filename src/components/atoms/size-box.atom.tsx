interface SizeBoxProps {
  label: string;
  tabIndex?: number;
  selected?: boolean;
  onClick: () => void;
}

export const SizeBox: React.FC<SizeBoxProps> = ({
  label,
  tabIndex = 0,
  selected = false,
  onClick,
}) => {
  return (
    <div
      className={`w-18 h-8 flex items-center justify-center bg-secondary transition-all transform active:scale-90 active:opacity-80 cursor-pointer rounded border-2 ${
        selected ? 'border-primary' : 'border-secondary'
      }`}
      tabIndex={tabIndex}
      onClick={onClick}
      role="button"
    >
      <span>{label}</span>
    </div>
  );
};
