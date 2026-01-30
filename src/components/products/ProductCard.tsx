import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/produtos/${product.categoriaSlug}/${product.id}`}
      className="group block bg-color-quaternary rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative w-full h-48 md:h-64 overflow-hidden">
        <Image
          src={product.imagemPrincipal}
          alt={product.nome}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="font-family-primary text-lg font-semibold text-color-primary mb-2 group-hover:text-color-primary/80 transition-colors">
          {product.nome}
        </h3>
        <p className="font-family-secondary text-sm text-color-secondary line-clamp-2">
          {product.descricao}
        </p>
      </div>
    </Link>
  );
}
