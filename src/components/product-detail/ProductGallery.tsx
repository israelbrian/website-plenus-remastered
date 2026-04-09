'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductGallery({
  images,
  productName,
}: ProductGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Memoriza funções para usar no useEffect de teclado
  const nextImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const selectImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  // Travar o scroll da página e escutar teclas quando aberto
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isFullscreen) return;
      if (e.key === 'Escape') setIsFullscreen(false);
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    if (isFullscreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isFullscreen, nextImage, prevImage]);

  if (images.length === 0) {
    return (
      <div className="w-full h-96 bg-color-surface-alt rounded-lg flex items-center justify-center">
        <p className="font-family-secondary text-color-muted">
          Sem imagens disponíveis
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="space-y-4">
        {/* Imagem Principal (Modo Normal) */}
        <div 
          className="relative w-full h-[350px] md:h-[500px] rounded-lg overflow-hidden bg-color-surface-alt group cursor-pointer"
          onClick={() => setIsFullscreen(true)}
        >
          <Image
            src={images[currentImageIndex]}
            alt={`${productName} - Imagem ${currentImageIndex + 1}`}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            priority
          />
          
          {/* Overlay Escurecido e Icone de Expandir (Aparece no Hoover do Desktop) */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
            <div className="bg-color-white/90 text-color-primary p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg transform scale-95 group-hover:scale-100">
              <Maximize2 size={24} />
            </div>
          </div>

          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-color-white/80 hover:bg-color-white text-color-primary p-2 md:p-3 rounded-full transition-colors shadow-md z-10"
                aria-label="Imagem anterior"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-color-white/80 hover:bg-color-white text-color-primary p-2 md:p-3 rounded-full transition-colors shadow-md z-10"
                aria-label="Próxima imagem"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </div>

        {/* Thumbnails (Modo Normal) */}
        {images.length > 1 && (
          <div className="grid grid-cols-4 md:grid-cols-6 gap-2 md:gap-3">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => selectImage(index)}
                className={`relative w-full h-20 md:h-24 rounded-lg overflow-hidden border-2 transition-all ${currentImageIndex === index
                    ? 'border-color-primary opacity-100'
                    : 'border-transparent hover:border-color-border opacity-70 hover:opacity-100'
                  }`}
              >
                <Image
                  src={image}
                  alt={`${productName} - Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Modal Tela Cheia (Lightbox) */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm">
          {/* Botão Fechar */}
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 p-2 md:p-3 rounded-full transition-colors z-50"
            aria-label="Fechar visualização expandida"
          >
             <X size={28} />
          </button>

          {/* Imagem Principal Tela Cheia */}
          <div className="relative w-full h-[80vh] md:h-[90vh] flex items-center justify-center px-4 md:px-16" onClick={() => setIsFullscreen(false)}>
            <div className="relative w-full h-full cursor-default" onClick={(e) => e.stopPropagation()}>
              <Image
                src={images[currentImageIndex]}
                alt={`${productName} - Expandida`}
                fill
                className="object-contain"
                quality={100}
                priority
              />
            </div>
            
            {/* Navegação Tela Cheia */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 md:left-8 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 md:p-4 rounded-full transition-colors backdrop-blur-md z-50 border border-white/10"
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft size={32} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 md:right-8 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 md:p-4 rounded-full transition-colors backdrop-blur-md z-50 border border-white/10"
                  aria-label="Próxima imagem"
                >
                  <ChevronRight size={32} />
                </button>
              </>
            )}
          </div>

          {/* Indicação de Imagem Atual (Contador) */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/60 px-4 py-2 rounded-full text-white/80 font-family-secondary text-sm md:text-base border border-white/10 shadow-lg">
            {currentImageIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
