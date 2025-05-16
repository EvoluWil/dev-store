'use client';

import { useDebounce } from '@/hooks/debounce.hook';
import { validateZipCode } from '@/validators/zip-code.validator';
import InputMask from '@mona-health/react-input-mask';
import { ChangeEvent, InputHTMLAttributes, useEffect, useState } from 'react';
import { Icon } from '../atoms/icon.atom';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  loading?: boolean;
  defaultValue?: string;
  onChangeValue: (value: string) => void;
}

export const ZipCodePicker = ({
  defaultValue,
  onChangeValue,
  loading = false,
  label,
  ...inputBaseProps
}: Props) => {
  const [value, setValue] = useState<string>(defaultValue || '');
  const debouncedValue = useDebounce(value, 500);

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (validateZipCode(debouncedValue)) {
      onChangeValue(debouncedValue?.replace('-', ''));
    }
  }, [debouncedValue, onChangeValue]);

  const hasLoading = loading || debouncedValue !== value;

  return (
    <InputMask
      mask="99999-999"
      onChange={({ target }: ChangeEvent<HTMLInputElement>) =>
        handleChange(target.value)
      }
      maskPlaceholder={null}
    >
      <div className="relative">
        {}
        <label className="text-primary text-sm font-medium">
          {value && label}

          <input
            value={value}
            onChange={() => null}
            type="text"
            className="bg-secondary border border-secondary text-primary text-sm rounded-lg block w-full ps-4 p-2.5 mt-1"
            placeholder={label}
            {...inputBaseProps}
          />
        </label>
        {hasLoading && (
          <div className="absolute inset-y-0 end-4 flex items-center ps-3.5 pointer-events-none">
            <Icon name="autorenew" className="animate-spin" />
          </div>
        )}
      </div>
    </InputMask>
  );
};
