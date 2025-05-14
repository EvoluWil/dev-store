'use client';

import { RadioPicker } from '@/components/molecules/radio-picker.molecule';

export default function Home() {
  return (
    <>
      <RadioPicker
        type="COLOR"
        onSelect={() => console.log('ColorBox clicked')}
        options={[
          {
            value: '#FF0000',
            label: 'Red',
          },
          {
            value: '#00FF00',
            label: 'Green',
          },
          {
            value: '#0000FF',
            label: 'Blue',
          },
        ]}
      />
      <RadioPicker
        type="SIZE"
        onSelect={() => console.log('ColorBox clicked')}
        options={[
          {
            value: 'S',
            label: 'Small',
          },
          {
            value: 'M',
            label: 'Medium',
          },
          {
            value: 'L',
            label: 'Large',
          },
        ]}
      />
    </>
  );
}
