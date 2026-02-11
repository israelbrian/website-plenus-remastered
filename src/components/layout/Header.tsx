'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Instagram, MessageCircle, Menu, X } from 'lucide-react';
import { useState } from 'react';

const NAV_ITEMS = [
  { label: 'Página Inicial', href: '/', match: (path: string) => path === '/' },
  { label: 'Produtos', href: '/produtos', match: (path: string) => path.startsWith('/produtos') },
  { label: 'Contato', href: '/#contato', match: () => false },
] as const;

const SOCIAL_LINKS = [
  { href: 'https://instagram.com/plenusplanejados', label: 'Instagram', icon: Instagram },
  { href: 'https://wa.me/55319966407544', label: 'WhatsApp', icon: MessageCircle },
] as const;

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-color-beige-500 border-b border-color-border">
      {/* Barra superior: redes à esquerda, título ao centro, hamburger à direita só no mobile */}
      <div className="container mx-auto px-4 pt-4 pb-2">
        <div className="grid grid-cols-3 items-center gap-2">
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-color-white hover:text-color-accent transition-colors duration-200"
                aria-label={label}
              >
                <Icon size={22} />
              </Link>
            ))}
          </div>

          <Link
            href="/"
            className="font-family-primary text-center text-xl sm:text-2xl md:text-4xl 2xl:text-5xl font-bold text-color-white hover:text-color-accent transition-colors duration-200 justify-self-center"
          >
            Plenus Planejados
          </Link>

            {/* Menu hamburguer mobile */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              className="md:hidden p-2 text-color-white hover:text-color-accent transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-color-accent"
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu de navegação – centralizado; no mobile fica dentro do hamburger */}
      <nav aria-label="Menu principal" className="border-t border-color-border/80">
        <div className="container mx-auto px-4">
          {/* Desktop: nav sempre visível e centralizada */}
          <ul className="hidden md:flex items-center justify-center gap-6 lg:gap-8 py-4">
            {NAV_ITEMS.map(({ label, href, match }) => {
              const isActive = match(pathname);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`font-family-secondary text-sm uppercase tracking-wide py-2 transition-all duration-200 hover:text-color-accent hover:scale-105 ${
                      isActive ? 'is-active text-color-accent font-semibold' : 'text-color-white'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile: nav expansível pelo hamburger */}
          {menuOpen && (
            <ul className="md:hidden flex flex-col gap-2 py-4">
              {NAV_ITEMS.map(({ label, href, match }) => {
                const isActive = match(pathname);
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className={`font-family-secondary text-base py-3 px-4 block rounded-lg transition-all duration-200 hover:bg-color-beige-600 hover:text-color-accent ${
                        isActive ? 'is-active bg-color-beige-600 text-color-accent font-semibold' : 'text-color-white'
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </nav>

      {/* Bloco título + subtítulo – ocupa mais espaço no header (como na referência) */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="text-center">
          <p className="font-family-secondary text-color-white/90 text-xs md:text-sm uppercase tracking-widest mb-2">
            Qualidade e design para
          </p>
          <h2 className="font-family-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-color-white tracking-tight">
            Transformar seu espaço
          </h2>
        </div>
      </div>
    </header>
  );
}
