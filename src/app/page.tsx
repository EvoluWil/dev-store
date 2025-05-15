'use client';

import { Icon } from '@/components/atoms/icon.atom';
import { Rating } from '@/components/atoms/rating.atom';
import { Button } from '@/components/molecules/button.molecule';
import { ProductTitle } from '@/components/molecules/product-title.molecule';
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
      <Button
        icon="home"
        onClick={() => console.log('IconButton clicked')}
        className="bg-primary text-white"
      />
      <Button
        icon="add_shopping_cart"
        onClick={() => console.log('IconButton clicked')}
        className="bg-primary text-white w-full"
      >
        Add to Cart
      </Button>
      <Icon name="home" className="text-4xl text-primary" />
      <ProductTitle title="Long Sleeve Overshirt, Khaki, 6" price={1999} />
      <Rating value={4} />
    </>
  );
}
