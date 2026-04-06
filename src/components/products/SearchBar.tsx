'use client';

import { Search } from 'lucide-react';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function SearchBar({
  searchQuery,
  onSearchChange,
}: SearchBarProps) {
  return (
    <div className="relative w-full">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-color-muted w-5 h-5" />
      <input
        type="text"
        placeholder="Buscar produtos..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full pl-10 pr-4 py-3 sm:py-3.5 rounded-lg shadow-sm border border-color-border/30 bg-color-white text-color-primary font-family-secondary focus:outline-none focus:ring-2 focus:ring-color-primary focus:border-transparent transition-all"
      />
    </div>
  );
}
