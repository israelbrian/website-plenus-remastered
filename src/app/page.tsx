import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import { getFeaturedProducts } from '@/lib/products';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const featuredProducts = await getFeaturedProducts();

  return (
    <main>
      <HeroSection />
      <FeaturedProducts products={featuredProducts} />
      <AboutSection />
    </main>
  );
}
