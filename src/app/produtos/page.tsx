import { Metadata } from 'next';
import ProductsPageClient from './ProductsPageClient';

export const metadata: Metadata = {
  title: 'Produtos',
  description: 'Explore nossa linha completa de móveis planejados',
};

export default function ProductsPage() {
  return <ProductsPageClient />;
}
