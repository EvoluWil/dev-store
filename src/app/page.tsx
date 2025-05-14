'use client';

import { ColorPicker } from '@/molecules/color-picker.molecule';

export default function Home() {
  return (
    <>
      <ColorPicker
        onSelect={() => console.log('ColorBox clicked')}
        colors={[
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
    </>
  );
}
