'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductGallery({
  images,
  productName,
}: ProductGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const selectImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  if (images.length === 0) {
    return (
      <div className="w-full h-96 bg-color-tertiary rounded-lg flex items-center justify-center">
        <p className="font-family-secondary text-color-secondary">
          Sem imagens disponíveis
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Imagem Principal */}
      <div className="relative w-full h-96 md:h-[500px] rounded-lg overflow-hidden bg-color-tertiary">
        <Image
          src={images[currentImageIndex]}
          alt={`${productName} - Imagem ${currentImageIndex + 1}`}
          fill
          className="object-cover"
          priority
        />
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-color-primary/80 text-color-quaternary p-2 rounded-full hover:bg-color-primary transition-colors"
              aria-label="Imagem anterior"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-color-primary/80 text-color-quaternary p-2 rounded-full hover:bg-color-primary transition-colors"
              aria-label="Próxima imagem"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => selectImage(index)}
              className={`relative w-full h-20 md:h-24 rounded-lg overflow-hidden border-2 transition-all ${
                currentImageIndex === index
                  ? 'border-color-primary'
                  : 'border-transparent hover:border-color-tertiary'
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
  );
}
