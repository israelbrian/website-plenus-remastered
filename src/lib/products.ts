import { Product, Category } from '@/types';

// ⏱️ Configuração de cache de 15 dias (fácil manutenção)
export const CACHE_REVALIDATION_TIME = 1296000;

/**
 * Resolve a URL base do site para chamadas internas às API Routes.
 * Em produção no Cloudflare, usa SITE_URL definida no wrangler.jsonc.
 * Em desenvolvimento, aponta para localhost.
 */
function getBaseUrl(): string {
  return process.env.SITE_URL || 'http://localhost:3000';
}

// 1. API: Listar todos (via API Route proxy interna)
export async function getAllProducts(): Promise<Product[]> {
  try {
    const baseUrl = getBaseUrl();
    const res = await fetch(`${baseUrl}/api/produtos`, {
      next: { revalidate: CACHE_REVALIDATION_TIME },
    });
    if (!res.ok) {
      console.error(`Erro ao buscar produtos: ${res.status} ${res.statusText}`);
      return [];
    }
    return await res.json();
  } catch (error) {
    console.error('Falha na rede ao buscar produtos:', error);
    return [];
  }
}

// 2. API: Categorias (via API Route proxy interna)
export async function getAllCategories(): Promise<Category[]> {
  try {
    const baseUrl = getBaseUrl();
    const res = await fetch(`${baseUrl}/api/categorias`, {
      next: { revalidate: CACHE_REVALIDATION_TIME },
    });
    if (!res.ok) {
      console.error(`Erro ao buscar categorias: ${res.status} ${res.statusText}`);
      return [];
    }
    return await res.json();
  } catch (error) {
    console.error('Falha na rede ao buscar categorias:', error);
    return [];
  }
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
