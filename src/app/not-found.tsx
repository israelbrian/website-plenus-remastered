import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-color-surface">
      <div className="text-center px-4">
        <h1 className="font-family-primary text-6xl font-bold text-color-primary mb-4">
          404
        </h1>
        <h2 className="font-family-primary text-2xl font-semibold text-color-primary mb-4">
          Página não encontrada
        </h2>
        <p className="font-family-secondary text-base text-color-muted mb-8">
          A página que você está procurando não existe.
        </p>
        <Link
          href="/"
          className="inline-block bg-color-primary text-color-white font-family-accent font-semibold px-6 py-3 rounded-lg hover:bg-color-primary/90 transition-colors duration-300"
        >
          Voltar para Home
        </Link>
      </div>
    </div>
  );
}
