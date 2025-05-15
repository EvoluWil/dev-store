'use client';

import { Icon } from '@/components/atoms/icon.atom';
import { ImageBox } from '@/components/atoms/image-box.atom';
import { ImageWatch } from '@/components/atoms/image-watch.atom';
import { Rating } from '@/components/atoms/rating.atom';
import { Button } from '@/components/molecules/button.molecule';
import { ProductTitle } from '@/components/molecules/product-title.molecule';
import { RadioPicker } from '@/components/molecules/radio-picker.molecule';

export default function Home() {
  return (
    <>
      <RadioPicker
        type="COLOR"
        label="Color"
        defaultRadioValue="#FF0000"
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
        label="Size"
        defaultRadioValue="M"
        onSelect={() => console.log('SizeBox clicked')}
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
      <RadioPicker
        type="IMAGE"
        onSelect={() => console.log('Image clicked')}
        options={[
          {
            value: '/images/products/001-001-1.webp',
            label: 'image',
          },
          {
            value: '/images/products/001-001-2.webp',
            label: 'image',
          },
          {
            value: '/images/products/001-001-3.webp',
            label: 'image',
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
      <ImageBox
        src="/images/products/001-001-1.webp"
        onClick={() => console.log('Image clicked')}
        selected
      />
      <ImageBox
        src="/images/products/001-001-1.webp"
        onClick={() => console.log('Image clicked')}
      />
      <ImageWatch
        src={'/images/products/001-001-1.webp'}
        width={400}
        height={400}
      />
    </>
  );
}
