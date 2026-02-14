import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Product, Category } from '@/types';
import { getCategoryBySlug } from '@/lib/products';

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const category: Category | undefined = getCategoryBySlug(product.categoriaSlug);

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm">
        <Link
          href="/"
          className="font-family-body text-color-muted hover:text-color-primary transition-colors"
        >
          Home
        </Link>
        <span className="text-color-muted">/</span>
        <Link
          href="/produtos"
          className="font-family-body text-color-muted hover:text-color-primary transition-colors"
        >
          Produtos
        </Link>
        {category && (
          <>
            <span className="text-color-muted">/</span>
            <span className="font-family-body text-color-primary">
              {category.nome}
            </span>
          </>
        )}
      </nav>

      {/* Nome do Produto */}
      <div>
        <h1 className="font-family-primary text-3xl md:text-4xl font-bold text-color-primary mb-2">
          {product.nome}
        </h1>
        {category && (
          <p className="font-family-body text-lg text-color-muted">
            Categoria: {category.nome}
          </p>
        )}
      </div>

      {/* Descrição */}
      <div>
        <h2 className="font-family-primary text-xl font-semibold text-color-primary mb-3">
          Descrição
        </h2>
        <p className="font-family-body text-base text-color-primary leading-relaxed">
          {product.descricao}
        </p>
      </div>

      {/* Botão Voltar */}
      <div>
        <Link
          href="/produtos"
          className="inline-flex items-center gap-2 bg-color-primary text-color-white font-family-accent font-semibold px-6 py-3 rounded-lg hover:bg-color-primary/90 transition-colors duration-300"
        >
          <ArrowLeft size={20} />
          Voltar para Produtos
        </Link>
      </div>
    </div>
  );
}
