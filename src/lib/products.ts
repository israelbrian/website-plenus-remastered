import { Product, Category, ProductsData } from '@/types';
import productsData from '@/data/products.json';

const data = productsData as ProductsData;

export function getAllProducts(): Product[] {
  return data.produtos;
}

export function getProductById(id: number): Product | undefined {
  return data.produtos.find((product) => product.id === id);
}

export function getProductsByCategory(categoria: string): Product[] {
  return data.produtos.filter(
    (product) => product.categoriaSlug === categoria
  );
}

export function getFeaturedProducts(): Product[] {
  return data.produtos
    .filter((product) => product.destaque)
    .sort((a, b) => b.relevancia - a.relevancia)
    .slice(0, 3);
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase();
  return data.produtos.filter(
    (product) =>
      product.nome.toLowerCase().includes(lowerQuery) ||
      product.descricao.toLowerCase().includes(lowerQuery)
  );
}

export function getAllCategories(): Category[] {
  return data.categorias;
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return data.categorias.find((category) => category.slug === slug);
}

export function getProductByCategoryAndId(
  categoria: string,
  id: number
): Product | undefined {
  return data.produtos.find(
    (product) =>
      product.categoriaSlug === categoria && product.id === id
  );
}
