import Link from 'next/link';

const NAV_ITEMS = [
  { label: 'Página Inicial', href: '/' },
  { label: 'Produtos', href: '/produtos' },
  { label: 'Contato', href: '/#contato' },
] as const;

export default function Header() {
  return (
    <header className="bg-color-beige-500 border-b border-color-border">
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo/Título */}
          <div className="text-center sm:text-left">
            <Link href="/" className="font-family-primary text-2xl sm:text-3xl md:text-4xl font-bold text-color-white hover:text-color-accent transition-colors duration-200">
              Plenus Planejados
            </Link>
          </div>

          {/* Navegação – em mobile: linha única (estilo breadcrumb); em desktop: menu horizontal */}
          <nav aria-label="Menu principal" className="w-full sm:w-auto">
            <ul className="flex flex-wrap items-center justify-center sm:justify-end gap-2 md:gap-3">
              {NAV_ITEMS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-family-secondary text-sm md:text-base font-medium text-color-white bg-color-surface-alt/80 px-3 py-2 rounded-lg text-center block transition-all duration-200 hover:bg-color-accent hover:text-color-primary hover:scale-105 focus:outline-none focus:ring-2 focus:ring-color-accent focus:ring-offset-2 focus:ring-offset-color-beige-500"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
