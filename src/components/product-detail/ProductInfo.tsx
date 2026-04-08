import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';
import { Product, Category } from '@/types';
import { getCategoryBySlug } from '@/lib/products';

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const category: Category | undefined = getCategoryBySlug(product.categoriaSlug);

  return (
    <div className="flex flex-col h-full">
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
          <h1 className="font-family-title text-3xl md:text-4xl font-bold text-color-primary mb-2">
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
          <h2 className="font-family-title text-xl font-semibold text-color-primary mb-3">
            Descrição
          </h2>
          <p className="font-family-body text-base text-color-primary leading-relaxed">
            {product.descricao}
          </p>
        </div>
      </div>

      {/* Ações empurradas para a base (mt-auto) ocupando 100% da largura do painel */}
      <div className="flex flex-col sm:flex-row w-full gap-4 pt-8 mt-auto">
        {/* Botão Voltar (30% do espaço horizontal no Desktop) */}
        <Link
          href="/produtos"
          className="w-full sm:flex-[3] inline-flex items-center justify-center gap-2 bg-color-primary text-color-white font-family-title font-bold py-4 rounded-lg hover:bg-color-accent hover:text-color-primary transition-colors duration-300 shadow-sm whitespace-nowrap"
        >
          <ArrowLeft size={20} />
          <span>Voltar</span>
        </Link>

        {/* Botão Orçamento WhatsApp (70% do espaço horizontal no Desktop) */}
        <Link
          href={`https://wa.me/3185697977?text=${encodeURIComponent(
            `Olá! Vi sobre o produto: *${product.nome}* no site *Plenus Planejados* e gostaria de um orçamento.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:flex-[7] inline-flex items-center justify-center gap-2 bg-color-primary text-color-white font-family-title font-bold py-4 rounded-lg hover:bg-color-accent hover:text-color-primary transition-all duration-300 shadow-sm whitespace-nowrap"
        >
          <WhatsAppIcon className="w-6 h-6" />
          <span>Solicitar Orçamento</span>
        </Link>
      </div>
    </div>
  );
}
