import { PRODUCTS } from '@/constants/products/products.constants';
import { redirect } from 'next/navigation';

export default async function NotFound() {
  return redirect(`/products/${PRODUCTS[0].id}`);
}
