'use client';

import { PRODUCTS } from '@/constants/products/products.constants';
import { redirect } from 'next/navigation';

export default function Home() {
  return redirect(`/products/${PRODUCTS[0].id}`);
}
