import { Option } from '@/types/commons.type';
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
  onSelect: (value: string) => void;
  value: string;
  type: keyof typeof TypeEnum;
  label?: string;
};

export const RadioPicker: React.FC<RadioPickerProps> = ({
  options,
  onSelect,
  value,
  type,
  label,
}) => {
  const selectedValue =
    options.find((item) => item.id === value) || options?.[0] || null;

  const handleSelect = (item: Option) => {
    onSelect(item.id);
  };

  return (
    <div aria-label="Radio Picker">
      {!!selectedValue && !!label && (
        <div className="flex gap-2">
          <span className="text-secondary">{label}:</span>
          <label className="font-bold">{selectedValue?.label}</label>
        </div>
      )}

      <div className="flex gap-4" role="radiogroup">
        {options.map((item, index) => (
          <Tooltip
            key={item.id}
            title={type !== TypeEnum.IMAGE ? item.label : ''}
          >
            {type === TypeEnum.SIZE && (
              <SizeBox
                label={item.value}
                selected={item.id === selectedValue?.id}
                tabIndex={index}
                onClick={() => handleSelect(item)}
              />
            )}

            {type === TypeEnum.COLOR && (
              <ColorBox
                color={item.value}
                selected={item.id === selectedValue?.id}
                tabIndex={index}
                onClick={() => handleSelect(item)}
              />
            )}

            {type === TypeEnum.IMAGE && (
              <ImageBox
                src={item.value}
                alt={item.label}
                selected={item.id === selectedValue?.id}
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
