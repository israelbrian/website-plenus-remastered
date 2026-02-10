import Image from 'next/image';
import armario from '../../public/images/produtos/armario.jpg';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      <div className="absolute inset-0 bg-color-primary/50 z-10" />
      <Image
        src="{armario}"
        alt="Plenus Planejados - Móveis Planejados"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="text-center px-4">
          <h2 className="font-family-primary text-4xl md:text-5xl lg:text-6xl font-bold text-color-white mb-4">
            Móveis Planejados
          </h2>
          <p className="font-family-secondary text-lg md:text-xl text-color-white">
            Qualidade e design para transformar seu espaço
          </p>
        </div>
      </div>
    </section>
  );
}
