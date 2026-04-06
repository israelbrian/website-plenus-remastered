'use client';

import { getAllCategories } from '@/lib/products';
import { Category } from '@/types';
import { useEffect, useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

interface CategorySidebarProps {
  selectedCategory: string | null;
  onCategorySelect: (category: string | null) => void;
}

export default function CategorySidebar({
  selectedCategory,
  onCategorySelect,
}: CategorySidebarProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setCategories(getAllCategories());
  }, []);

  return (
    <aside className="bg-color-white rounded-lg shadow-sm border border-color-border/30 overflow-hidden">
      {/* Cabeçalho da Sidebar com o Toggle Button (Apenas Mobile) */}
      <div className="flex justify-between items-center p-4 border-b border-color-border/30 md:border-b-0 md:pb-0">
        <h3 className="font-family-title text-xl font-bold text-color-primary">
          Categorias
        </h3>

        {/* Menu hamburguer mobile (segue os mesmos breakpoints "md:hidden" do Header) */}
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden p-1 text-color-primary hover:text-color-accent transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-color-accent"
          aria-label={menuOpen ? 'Fechar categorias' : 'Abrir categorias'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Lista de Categorias - Escondida no Mobile até clicar no Hamburger, sempre vísivel no Desktop */}
      <div className={`p-4 pt-2 md:block ${menuOpen ? 'block' : 'hidden'}`}>
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => {
                onCategorySelect(null);
                setMenuOpen(false); // Fecha o menu no mobile após clicar na categoria
              }}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors font-family-secondary ${selectedCategory === null
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
                onClick={() => {
                  onCategorySelect(category.slug);
                  setMenuOpen(false); // Fecha automaticamento no mobile pós-clique
                }}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors font-family-secondary ${selectedCategory === category.slug
                  ? 'bg-color-primary text-color-white font-semibold'
                  : 'bg-color-surface-alt text-color-primary hover:bg-color-border'
                  }`}
              >
                {category.nome}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
