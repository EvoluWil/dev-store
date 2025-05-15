import { Product } from '@/types/product.type';

export const PRODUCTS: Product[] = [
  {
    id: '001',
    name: 'Camiseta Slim Masculina Básica',
    rating: 4.5,
    description: 'Camiseta masculina básica de algodão com modelagem slim.',
    has_variations: true,
    variationAttributes: ['color', 'size'],
    imagesByAttribute: {
      color: {
        blue: [
          '/images/products/001-001-1.webp',
          '/images/products/001-001-2.webp',
          '/images/products/001-001-3.webp',
          '/images/products/001-001-4.webp',
        ],
        yellow: [
          '/images/products/001-002-1.webp',
          '/images/products/001-002-2.webp',
          '/images/products/001-002-3.webp',
        ],
        black: [
          '/images/products/001-003-1.webp',
          '/images/products/001-003-2.webp',
          '/images/products/001-003-3.webp',
          '/images/products/001-003-4.webp',
        ],
      },
    },
    variations: [
      {
        id: '001-001',
        attributes: {
          color: {
            value: '#A0D3E8',
            label: 'Azul Claro',
          },
          size: {
            value: 'P',
            label: 'Pequeno',
          },
        },
        price: 799,
        quantity: 10,
        default: true,
      },
      {
        id: '001-002',
        attributes: {
          color: {
            value: '#FFF3B0',
            label: 'Amarelo Claro',
          },
          size: {
            value: 'P',
            label: 'Pequeno',
          },
        },
        price: 799,
        quantity: 10,
        default: true,
      },
      {
        id: '001-003',
        attributes: {
          color: {
            value: '#000000',
            label: 'Preto',
          },
          size: {
            value: 'M',
            label: 'Médio',
          },
        },
        price: 799,
        quantity: 5,
        default: false,
      },
    ],
  },
  {
    id: '002',
    name: 'Camiseta Estampada Masculina',
    rating: 4.2,
    description: 'Camiseta masculina com estampa frontal moderna.',
    has_variations: true,
    variationAttributes: ['color', 'size'],
    imagesByAttribute: {
      color: {
        white: [
          '/images/products/002-001-1.webp',
          '/images/products/002-001-2.webp',
        ],
        gray: [
          '/images/products/002-002-1.webp',
          '/images/products/002-002-2.webp',
        ],
      },
    },
    variations: [
      {
        id: '002-001',
        attributes: {
          color: {
            value: '#FFFFFF',
            label: 'Branco',
          },
          size: {
            value: 'G',
            label: 'Grande',
          },
        },
        price: 899,
        quantity: 8,
        default: true,
      },
      {
        id: '002-002',
        attributes: {
          color: {
            value: '#B0B0B0',
            label: 'Cinza',
          },
          size: {
            value: 'M',
            label: 'Médio',
          },
        },
        price: 899,
        quantity: 6,
        default: false,
      },
    ],
  },
  {
    id: '003',
    name: 'Camiseta Gola V Masculina',
    rating: 4.0,
    description: 'Camiseta masculina com gola V em tecido leve.',
    has_variations: true,
    variationAttributes: ['color', 'size'],
    imagesByAttribute: {
      color: {
        blue: [
          '/images/products/003-001-1.webp',
          '/images/products/003-001-2.webp',
          '/images/products/003-001-3.webp',
          '/images/products/003-001-4.webp',
        ],
        white: [
          '/images/products/003-002-1.webp',
          '/images/products/003-002-2.webp',
          '/images/products/003-002-3.webp',
        ],
      },
    },
    variations: [
      {
        id: '003-001',
        attributes: {
          color: {
            value: '#00296b',
            label: 'Azul Marinho',
          },
          size: {
            value: 'P',
            label: 'Pequeno',
          },
        },
        price: 849,
        quantity: 7,
        default: true,
      },
      {
        id: '003-002',
        attributes: {
          color: {
            value: '#ffffff',
            label: 'Branco',
          },
          size: {
            value: 'G',
            label: 'Grande',
          },
        },
        price: 849,
        quantity: 4,
        default: false,
      },
    ],
  },
  {
    id: '004',
    name: 'Xícara de Porcelana Branca',
    rating: 4.8,
    description: 'Xícara de porcelana branca com capacidade de 200ml.',
    has_variations: false,
    images: ['/images/products/004-1.webp'],
    price: 299,
    quantity: 20,
  },
  {
    id: '005',
    name: 'Ecobag Estampada Tie-Dye',
    rating: 4.6,
    description: 'Ecobag de algodão com estampa tie-dye colorida.',
    has_variations: true,
    variationAttributes: ['color'],
    imagesByAttribute: {
      color: {
        yellow: ['/images/products/005-001-1.webp'],
        green: ['/images/products/005-002-1.webp'],
      },
    },
    variations: [
      {
        id: '005-001',
        attributes: {
          color: {
            value: '#fff3b0',
            label: 'Amarelo Claro',
          },
        },
        price: 499,
        quantity: 15,
        default: true,
      },
      {
        id: '005-002',
        attributes: {
          color: {
            value: '#1b4332',
            label: 'Verde Escuro',
          },
        },
        price: 499,
        quantity: 10,
        default: false,
      },
    ],
  },
];
