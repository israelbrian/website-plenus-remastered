import { Metadata } from 'next';
import ProductsPageClient from './ProductsPageClient';
import { getAllProducts, getAllCategories } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Produtos',
  description: 'Explore nossa linha completa de móveis planejados',
};

export default async function ProductsPage() {
  const products = await getAllProducts();
  const categories = await getAllCategories();

  return <ProductsPageClient initialProducts={products} initialCategories={categories} />;
}
