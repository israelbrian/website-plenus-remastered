'use client';

import { useState, useMemo } from 'react';
import { Product } from '@/types';
import CategorySidebar from '@/components/products/CategorySidebar';
import SearchBar from '@/components/products/SearchBar';
import ProductGrid from '@/components/products/ProductGrid';

interface ProductsPageClientProps {
  initialProducts: Product[];
  initialCategories: Category[];
}

export default function ProductsPageClient({ initialProducts, initialCategories }: ProductsPageClientProps) {
  const [products] = useState<Product[]>(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
    
    // Quando o usuário seleciona "Todas" (categoria nula),
    // queremos limpar o input de busca textual simultaneamente para exibir o catálogo integral
    if (category === null) {
      setSearchQuery('');
    }
  };

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filtrar por categoria
    if (selectedCategory) {
      filtered = filtered.filter((p) => p.categoriaSlug === selectedCategory);
    }

    // Filtrar por busca
    if (searchQuery.trim()) {
      const lowerQuery = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.nome.toLowerCase().includes(lowerQuery) ||
          p.descricao.toLowerCase().includes(lowerQuery)
      );
    }

    // Ordenar por relevância
    return filtered.sort((a, b) => b.relevancia - a.relevancia);
  }, [products, selectedCategory, searchQuery]);

  return (
    <div className="container mx-auto px-4 py-6 md:py-10">
      <h1 className="sr-only">Catálogo de Produtos</h1>

      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        {/* Painel de Controle: Busca e Categorias (Mobile: Stacked Top / Desktop: Sidebar Left) */}
        <div className="w-full md:w-64 flex-shrink-0 flex flex-col gap-3 md:gap-5">
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
          <CategorySidebar
            categories={initialCategories}
            selectedCategory={selectedCategory}
            onCategorySelect={handleCategorySelect}
          />
        </div>

        {/* Grid de Produtos */}
        <div className="flex-1 mt-2 md:mt-0">
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </div>
  );
}
