import Image from 'next/image';

const HERO_IMAGE_PATH = '/images/produtos/planejados comercio/salao-2.jpg';

export default function HeroSection() {
  return (
    <section 
      className="relative w-full h-[400px] md:h-[500px] lg:h-[700px]" 
      style={{ clipPath: 'inset(0)' }}
    >
      <div className="fixed inset-0 w-full h-full z-[-1]">
        <Image
          src={HERO_IMAGE_PATH}
          alt="Plenus Planejados - Móveis Planejados"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Overlay escuro elegante opcional para caso injete H1 no futuro */}
      <div className="absolute inset-0 bg-color-primary/10 pointer-events-none" />
    </section>
  );
}
