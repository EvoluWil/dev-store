type AttributeName = 'color' | 'size';

type AttributeValue = {
  value: string;
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
  [attribute in AttributeName]?: {
    [value: string]: string[];
  };
};

export type Product = {
  id: string;
  name: string;
  description: string;
  has_variations: boolean;
  variationAttributes?: AttributeName[];
  variations?: ProductVariation[];
  images?: string[];
  imagesByAttribute?: ImagesByAttribute;
  price?: number;
  quantity?: number;
};
