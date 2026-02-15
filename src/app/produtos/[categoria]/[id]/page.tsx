import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getProductByCategoryAndId, getAllProducts, createProductSlug, extractIdFromSlug } from '@/lib/products';
import ProductGallery from '@/components/product-detail/ProductGallery';
import ProductInfo from '@/components/product-detail/ProductInfo';

interface ProductDetailPageProps {
  params: Promise<{
    categoria: string;
    id: string;
  }>;
}

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    categoria: product.categoriaSlug,
    id: createProductSlug(product.id, product.nome),
  }));
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { id, categoria } = await params;
  const productId = extractIdFromSlug(id);
  const product = getProductByCategoryAndId(categoria, productId);

  if (!product) {
    return {
      title: 'Produto não encontrado',
    };
  }

  return {
    title: product.nome,
    description: product.descricao,
    openGraph: {
      title: product.nome,
      description: product.descricao,
      images: [product.imagemPrincipal],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { id, categoria } = await params;
  const productId = extractIdFromSlug(id);

  if (isNaN(productId)) {
    notFound();
  }

  const product = getProductByCategoryAndId(categoria, productId);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Galeria */}
        <div>
          <ProductGallery images={product.imagens} productName={product.nome} />
        </div>

        {/* Informações */}
        <div>
          <ProductInfo product={product} />
        </div>
      </div>
    </div>
  );
}
