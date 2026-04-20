'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { getFeaturedProducts } from '@/lib/products';
import { Product } from '@/types';
import { createProductSlug } from '@/lib/products';

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Ocupamos 100% do card para visualização maior.
  // Plugins de Autoplay e WheelGestures atuando para atender ao scroll do mouse natural.
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center' },
    [
      Autoplay({ delay: 5000, stopOnInteraction: true }),
      // O plugin agora captura a rolagem da rodinha do mouse (eixo Y) e transforma em Swipe
      WheelGesturesPlugin({ forceWheelAxis: 'y' })
    ]
  );

  useEffect(() => {
    setProducts(getFeaturedProducts());
  }, []);

  // Sincroniza o Bolinha Atual com o Deslizar do Motor
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-12 md:py-20 bg-color-surface overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header da Seção */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-family-solid-2 text-2xl md:text-4xl font-semibold text-color-primary mb-4">
            Destaques Especiais
          </h2>
          <p className="font-family-body text-base md:text-xl text-color-muted max-w-2xl mx-auto">
            Design atemporal e qualidade superior para transformar completamente o seu ambiente.
          </p>
        </div>

        {/* Carrossel (Card Único Maior e Sólido) */}
        {products.length > 0 && (
          <div className="relative mb-12 group max-w-6xl mx-auto">

            {/* Viewport Embla */}
            <div className="overflow-hidden rounded-3xl shadow-xl border border-color-border/10" ref={emblaRef}>
              <div className="flex touch-pan-y">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="flex-[0_0_100%] min-w-0"
                  >
                    {/* Design do Novo Card Principal (Horizontal no Desktop, Vertical no Mobile) */}
                    <div className="flex flex-col lg:flex-row bg-color-white h-full group/card transition-all">

                      {/* Lado Esquerdo: Imagem Enorme */}
                      <div className="relative w-full lg:w-3/5 h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden">
                        <Image
                          src={product.imagemPrincipal}
                          alt={product.nome}
                          fill
                          className="object-cover group-hover/card:scale-105 transition-transform duration-700"
                          priority
                        />
                      </div>

                      {/* Lado Direito: Informações Robustas Plenus */}
                      <div className="w-full lg:w-2/5 p-8 md:p-12 lg:pr-28 flex flex-col justify-center bg-color-white">
                        <span className="font-family-body text-xs md:text-sm font-bold tracking-widest text-color-accent uppercase mb-3 block">
                          Catálogo • {product.categoria}
                        </span>

                        <h3 className="font-family-title text-2xl md:text-4xl font-bold text-color-primary mb-6 line-clamp-2 md:line-clamp-none">
                          {product.nome}
                        </h3>

                        <p className="font-family-body text-color-muted text-sm md:text-base leading-relaxed mb-8 line-clamp-4 md:line-clamp-none">
                          {product.descricao}
                        </p>

                        <div className="mt-auto flex justify-center lg:justify-start">
                          <Link
                            href={`/produtos/${product.categoriaSlug}/${createProductSlug(product.id, product.nome)}`}
                            className="inline-flex items-center gap-2 bg-color-primary text-color-white font-family-title font-bold text-sm lg:text-base px-8 py-4 rounded-xl hover:bg-color-accent hover:text-color-primary transition-colors duration-300 group/btn"
                          >
                            <span>Ver Detalhes</span>
                            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Setas de Navegação Sobrepostas */}
            <button
              onClick={scrollPrev}
              className="absolute top-[175px] md:top-[225px] lg:top-1/2 left-4 md:left-6 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-color-white/90 backdrop-blur-sm border border-color-border/20 rounded-full flex items-center justify-center text-color-primary shadow-lg hover:bg-color-white hover:text-color-accent hover:scale-105 transition-all z-10 opacity-100 disabled:opacity-50"
              aria-label="Produto anterior"
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 pr-[2px] md:pr-[4px]" />
            </button>

            <button
              onClick={scrollNext}
              className="absolute top-[175px] md:top-[225px] lg:top-1/2 right-4 md:right-6 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-color-white/90 backdrop-blur-sm border border-color-border/20 rounded-full flex items-center justify-center text-color-primary shadow-lg hover:bg-color-white hover:text-color-accent hover:scale-105 transition-all z-10 opacity-100 disabled:opacity-50"
              aria-label="Próximo produto"
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8 pl-[2px] md:pl-[4px]" />
            </button>

            {/* Paginadores Dinâmicos (Dots) */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-2">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  aria-label={`Ir para o destaque ${index + 1}`}
                  className={`h-2.5 md:h-3 rounded-full transition-all duration-300 ${
                    index === selectedIndex
                      ? 'w-8 md:w-10 bg-color-primary/60 shadow-md'
                      : 'w-2.5 md:w-3 bg-color-primary/40 hover:bg-color-primary'
                  }`}
                />
              ))}
            </div>

          </div>
        )}

        <div className="text-center mt-6">
          <Link
            href="/produtos"
            className="inline-block text-color-primary font-family-title uppercase font-bold text-base md:text-lg lg:text-xl tracking-widest hover:text-color-accent transition-colors underline decoration-color-accent decoration-2 underline-offset-4"
          >
            Explorar todo o catálogo
          </Link>
        </div>

      </div>
    </section>
  );
}
