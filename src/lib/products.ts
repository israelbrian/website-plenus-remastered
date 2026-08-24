import { Product, Category } from '@/types';

// const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8787';
const API_URL = 'https://plenus-api-backend.zdesenhos.workers.dev';

// ⏱️ Configuração de cache de 15 dias (fácil manutenção)
export const CACHE_REVALIDATION_TIME = 1296000;

// 🔒 Chave privada do servidor para ler as rotas GET autenticadas
const API_KEY = process.env.INTERNAL_API_KEY || '';

async function fetchAPI<T>(path: string, fallbackValue: T): Promise<T> {
  try {
    const res = await fetch(`${API_URL}${path}`, {
      next: { revalidate: CACHE_REVALIDATION_TIME },
      headers: {
        'x-api-key': API_KEY,
      },
    });

    if (!res.ok) {
      console.error(`Erro ao conectar na API Plenus: ${res.statusText}`);
      return fallbackValue;
    }
    
    return await res.json();
  } catch (error) {
    console.error(`Falha na rede ao conectar na API Plenus:`, error);
    return fallbackValue; // Evita falhas críticas em builds SSG
  }
}

// 1. API: Listar todos
export async function getAllProducts(): Promise<Product[]> {
  return fetchAPI<Product[]>('/produtos', []);
}

// 2. API: Categorias
export async function getAllCategories(): Promise<Category[]> {
  return fetchAPI<Category[]>('/categorias', []);
}

// 3. Memória: Detalhes
export async function getProductById(id: number): Promise<Product | undefined> {
  const products = await getAllProducts();
  return products.find((p) => p.id === id);
}

// 4. Memória: Filtro por Categoria
export async function getProductsByCategory(categoriaSlug: string): Promise<Product[]> {
  const products = await getAllProducts();
  return products.filter((p) => p.categoriaSlug === categoriaSlug);
}

// 5. Memória: Destaques
export async function getFeaturedProducts(): Promise<Product[]> {
  const products = await getAllProducts();
  return products
    .filter((p) => p.destaque)
    .sort((a, b) => b.relevancia - a.relevancia)
    .slice(0, 3);
}

// 6. Memória: Busca textual
export async function searchProducts(query: string): Promise<Product[]> {
  const lowerQuery = query.toLowerCase();
  const products = await getAllProducts();
  return products.filter(
    (p) =>
      p.nome.toLowerCase().includes(lowerQuery) ||
      p.descricao.toLowerCase().includes(lowerQuery)
  );
}

// 7. Memória: Categoria por Slug
export async function getCategoryBySlug(slug: string): Promise<Category | undefined> {
  const categories = await getAllCategories();
  return categories.find((c) => c.slug === slug);
}

// 8. Memória: Validador de Rota do Detalhe
export async function getProductByCategoryAndId(
  categoria: string,
  id: number
): Promise<Product | undefined> {
  const products = await getAllProducts();
  return products.find((p) => p.categoriaSlug === categoria && p.id === id);
}

// 9. Formatação Síncrona de Slugs (SEO)
export function createProductSlug(id: number, name: string): string {
  const slug = name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
  return `${id}-${slug}`;
}

export function extractIdFromSlug(slug: string): number {
  return parseInt(slug.split('-')[0], 10);
}
