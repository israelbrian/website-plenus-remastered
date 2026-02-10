'use client';

import { getAllCategories } from '@/lib/products';
import { Category } from '@/types';
import { useEffect, useState } from 'react';

interface CategorySidebarProps {
  selectedCategory: string | null;
  onCategorySelect: (category: string | null) => void;
}

export default function CategorySidebar({
  selectedCategory,
  onCategorySelect,
}: CategorySidebarProps) {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    setCategories(getAllCategories());
  }, []);

  return (
    <aside className="bg-color-white rounded-lg p-4 shadow-md">
      <h3 className="font-family-primary text-xl font-bold text-color-primary mb-4">
        Categorias
      </h3>
      <ul className="space-y-2">
        <li>
          <button
            onClick={() => onCategorySelect(null)}
            className={`w-full text-left px-4 py-2 rounded-lg transition-colors font-family-secondary ${
              selectedCategory === null
                ? 'bg-color-primary text-color-white font-semibold'
                : 'bg-color-surface-alt text-color-primary hover:bg-color-border'
            }`}
          >
            Todas
          </button>
        </li>
        {categories.map((category) => (
          <li key={category.slug}>
            <button
              onClick={() => onCategorySelect(category.slug)}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors font-family-secondary ${
                selectedCategory === category.slug
                  ? 'bg-color-primary text-color-white font-semibold'
                  : 'bg-color-surface-alt text-color-primary hover:bg-color-border'
              }`}
            >
              {category.nome}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
