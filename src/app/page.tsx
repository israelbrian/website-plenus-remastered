import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import FeaturedProducts from '@/components/home/FeaturedProducts';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedProducts />
      <AboutSection />
    </main>
  );
}
