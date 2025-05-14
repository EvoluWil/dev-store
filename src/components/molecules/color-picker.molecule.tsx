import { ColorBox } from '@/atoms/color-box.atom';
import { Option } from '@/types/commons.type';
import { useState } from 'react';

interface ColorPickerProps {
  colors: Option[];
  onSelect: (color: string) => void;
  defaultColorValue?: string;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({
  colors,
  onSelect,
  defaultColorValue,
}) => {
  const [selectedColor, setSelectedColor] = useState<Option | null>(() => {
    if (defaultColorValue) {
      return colors.find((color) => color.value === defaultColorValue) || null;
    }
    return colors?.[0] || null;
  });

  const handleSelect = (color: Option) => {
    setSelectedColor(color);
    onSelect(color.value);
  };

  return (
    <div aria-label="Color Picker">
      {!!selectedColor && (
        <div className="flex gap-2">
          <span className="text-secondary">Selected:</span>
          <label className="font-bold">{selectedColor?.label}</label>
        </div>
      )}

      <div className="flex gap-2" role="radiogroup">
        {colors.map((color, index) => (
          <ColorBox
            key={color.value}
            color={color.value}
            selected={color === selectedColor}
            tabIndex={index}
            onClick={() => handleSelect(color)}
          />
        ))}
      </div>
    </div>
  );
};
