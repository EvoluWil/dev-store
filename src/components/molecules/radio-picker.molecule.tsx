import { Option } from '@/types/commons.type';
import { useState } from 'react';
import { ColorBox } from '../atoms/color-box.atom';
import { ImageBox } from '../atoms/image-box.atom';
import { SizeBox } from '../atoms/size-box.atom';
import { Tooltip } from '../atoms/tooltip.atom';

enum TypeEnum {
  COLOR = 'COLOR',
  SIZE = 'SIZE',
  IMAGE = 'IMAGE',
}

type RadioPickerProps = {
  options: Option[];
  onSelect: (color: string) => void;
  defaultRadioValue?: string;
  type: keyof typeof TypeEnum;
  label?: string;
};

export const RadioPicker: React.FC<RadioPickerProps> = ({
  options,
  onSelect,
  defaultRadioValue,
  type,
  label,
}) => {
  const [selectedRadio, setSelectedRadio] = useState<Option | null>(() => {
    if (defaultRadioValue) {
      return options.find((item) => item.value === defaultRadioValue) || null;
    }
    return options?.[0] || null;
  });

  const handleSelect = (item: Option) => {
    setSelectedRadio(item);
    onSelect(item.value);
  };

  return (
    <div aria-label="Radio Picker">
      {!!selectedRadio && !!label && (
        <div className="flex gap-2">
          <span className="text-secondary">{label}:</span>
          <label className="font-bold">{selectedRadio?.label}</label>
        </div>
      )}

      <div className="flex gap-2" role="radiogroup">
        {options.map((item, index) => (
          <Tooltip key={item.value} title={item.label}>
            {type === TypeEnum.SIZE && (
              <SizeBox
                label={item.value}
                selected={item === selectedRadio}
                tabIndex={index}
                onClick={() => handleSelect(item)}
              />
            )}

            {type === TypeEnum.COLOR && (
              <ColorBox
                color={item.value}
                selected={item === selectedRadio}
                tabIndex={index}
                onClick={() => handleSelect(item)}
              />
            )}

            {type === TypeEnum.IMAGE && (
              <ImageBox
                src={item.value}
                alt={item.label}
                selected={item === selectedRadio}
                tabIndex={index}
                onClick={() => handleSelect(item)}
              />
            )}
          </Tooltip>
        ))}
      </div>
    </div>
  );
};
