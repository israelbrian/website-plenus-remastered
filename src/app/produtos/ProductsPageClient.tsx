'use client';

import { useEffect, useState, useMemo } from 'react';
import {
  getAllProducts,
  getProductsByCategory,
  searchProducts,
} from '@/lib/products';
import { Product } from '@/types';
import CategorySidebar from '@/components/products/CategorySidebar';
import SearchBar from '@/components/products/SearchBar';
import ProductGrid from '@/components/products/ProductGrid';

export default function ProductsPageClient() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setProducts(getAllProducts());
  }, []);

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filtrar por categoria
    if (selectedCategory) {
      filtered = getProductsByCategory(selectedCategory);
    }

    // Filtrar por busca
    if (searchQuery.trim()) {
      filtered = searchProducts(searchQuery);
      // Se há categoria selecionada, aplicar ambos os filtros
      if (selectedCategory) {
        filtered = filtered.filter(
          (p) => p.categoriaSlug === selectedCategory
        );
      }
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
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
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
