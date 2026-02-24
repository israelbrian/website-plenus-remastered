'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getFeaturedProducts } from '@/lib/products';
import { Product } from '@/types';
import ProductCard from '@/components/products/ProductCard';

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(getFeaturedProducts());
  }, []);

  return (
    <section className="py-12 md:py-16 bg-color-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-family-solid-2 text-3xl md:text-4xl font-semibold text-color-primary mb-4">
            Produtos em Destaque
          </h2>
          <p className="font-family-body text-base md:text-lg text-color-muted">
            Conheça alguns dos nossos melhores produtos
          </p>
        </div>

        {products.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        <div className="text-center">
          <Link
            href="/produtos"
            className="inline-block bg-color-primary text-color-white font-family-solid-2 font-bold uppercase px-8 py-3 rounded-lg hover:bg-color-accent hover:text-color-primary transition-colors duration-300"
          >
            Ver Móveis Planejados
          </Link>
        </div>
      </div>
    </section>
  );
}
