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
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="font-family-primary text-4xl font-bold text-color-primary mb-4">
          Produtos
        </h1>
        <SearchBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-64 flex-shrink-0">
          <CategorySidebar
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
          />
        </div>

        {/* Grid de Produtos */}
        <div className="flex-1">
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </div>
  );
}
