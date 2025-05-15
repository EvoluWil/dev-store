type AttributeName = 'color' | 'size';

type AttributeValue = {
  value: string;
  hex?: string;
  label?: string;
};

type ProductVariation = {
  id: string;
  attributes: Partial<Record<AttributeName, AttributeValue>>;
  price: number;
  quantity: number;
  default: boolean;
};

type ImagesByAttribute = {
  color: {
    [value: string]: string[];
  };
};

export type Product = {
  id: string;
  name: string;
  rating: number;
  description: string;
  has_variations: boolean;
  variationAttributes?: AttributeName[];
  variations?: ProductVariation[];
  images?: string[];
  imagesByAttribute?: ImagesByAttribute;
  price?: number;
  quantity?: number;
};
