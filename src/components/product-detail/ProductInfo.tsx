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
      {/* Descrição */}
      <div>
        <h2 className="font-family-primary text-xl font-semibold text-color-primary mb-3">
          Descrição
        </h2>
        <p className="font-family-body text-base text-color-primary leading-relaxed">
          {product.descricao}
        </p>
      </div>

      {/* Ações */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        {/* Botão Orçamento WhatsApp */}
        <Link
          href={`https://wa.me/3185697977?text=${encodeURIComponent(
            `Olá! Vi sobre o produto: *${product.nome}* no site *Plenus Planejados* e gostaria de um orçamento.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-family-title font-bold px-8 py-4 rounded-lg hover:bg-[#128C7E] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          <WhatsAppIcon className="w-6 h-6" />
          <span>Solicitar Orçamento</span>
        </Link>

        <Link
          href="/produtos"
          className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-color-primary text-color-primary font-family-secondary font-semibold px-6 py-4 rounded-lg hover:bg-color-primary hover:text-color-white transition-colors duration-300"
        >
          <ArrowLeft size={20} />
          <span>Voltar</span>
        </Link>
      </div>
    </div>
  );
}
