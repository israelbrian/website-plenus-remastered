import Image from 'next/image';

const HERO_IMAGE_PATH = '/images/produtos/armario.jpg';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      <Image
        src={HERO_IMAGE_PATH}
        alt="Plenus Planejados - Móveis Planejados"
        fill
        className="object-cover z-0"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 z-10" aria-hidden />
      {/* <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="text-center px-4">
          <h2 className="font-family-primary text-4xl md:text-5xl lg:text-6xl font-bold text-color-white mb-4">
            Móveis Planejados
          </h2>
          <p className="font-family-secondary text-lg md:text-xl text-color-white">
            Qualidade e design para transformar seu espaço
          </p>
        </div>
      </div> */}

    </section>
  );
}
