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
  onClearValue: () => void;
}

export const ZipCodePicker = ({
  defaultValue = '',
  onChangeValue,
  onClearValue,
  loading = false,
  label,
  ...inputBaseProps
}: Props) => {
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce(value, 500);

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  const handleClearValue = () => {
    setValue('');
    onClearValue();
  };

  useEffect(() => {
    if (validateZipCode(debouncedValue)) {
      onChangeValue(debouncedValue?.replace('-', ''));
    }
  }, [debouncedValue, onChangeValue]);

  const hasLoading = loading || debouncedValue !== value;

  return (
    <div className="flex gap-1 items-center">
      <InputMask
        mask="99999-999"
        onChange={({ target }: ChangeEvent<HTMLInputElement>) =>
          handleChange(target.value)
        }
        maskPlaceholder={null}
      >
        <div className="relative w-full">
          <label className="text-primary text-sm font-medium">
            {value && label}

            <input
              value={value || defaultValue}
              onChange={() => null}
              type="text"
              className="bg-secondary border border-secondary text-primary text-sm rounded-lg block w-full ps-4 pe-10 p-2.5 mt-1 disabled:cursor-not-allowed"
              placeholder={label}
              disabled={!!defaultValue}
              {...inputBaseProps}
            />
          </label>
          {hasLoading && (
            <div
              className={`absolute inset-y-0 end-2 flex items-center ps-3.5 pointer-events-none ${
                value ? 'mt-8' : 'mt-0'
              }`}
            >
              <Icon name="autorenew" className="animate-spin" />
            </div>
          )}
        </div>
      </InputMask>

      {!!defaultValue && (
        <div className={`flex items-center ps-3.5  ${value ? 'mt-8' : 'mt-0'}`}>
          <button
            className="mt-2 mx-2 text-blue-500 hover:underline text-sm whitespace-nowrap cursor-pointer"
            onClick={handleClearValue}
          >
            Change Zip Code
          </button>
        </div>
      )}
    </div>
  );
};
