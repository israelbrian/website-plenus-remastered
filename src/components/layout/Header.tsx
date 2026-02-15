'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import InstagramIcon from '@/components/icons/InstagramIcon';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';
import { useState } from 'react';

const NAV_ITEMS = [
  { label: 'Página Inicial', href: '/', match: (path: string) => path === '/' },
  { label: 'Produtos', href: '/produtos', match: (path: string) => path.startsWith('/produtos') },
  { label: 'Contato', href: '/#contato', match: () => false },
] as const;

const SOCIAL_LINKS = [
  { href: 'https://instagram.com/plenusplanejados', label: 'Instagram', icon: InstagramIcon },
  { href: 'https://wa.me/55319966407544', label: 'WhatsApp', icon: WhatsAppIcon },
] as const;

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-color-beige-500 border-b border-color-border">
      {/* Barra superior: redes à esquerda, título ao centro, hamburger à direita só no mobile */}
      <div className="container mx-auto px-4 pt-6 pb-4">
        <div className="flex justify-between items-center gap-2">
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:block text-color-white hover:text-color-accent transition-colors duration-200"
                aria-label={label}
              >
                <Icon className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px]" />
              </Link>
            ))}
          </div>

          <Link
            href="/"
            className="font-family-title text-color-accent text-center text-lg sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold uppercase tracking-widest hover:text-color-beige-50 transition-colors duration-300 mx-auto leading-tight"
          >
            Plenus Planejados
          </Link>

          {/* Menu hamburguer mobile */}
          <div className="flex justify-end flex-shrink-0">
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              className="md:hidden p-1 sm:p-2 text-color-white hover:text-color-accent transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-color-accent"
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <XMarkIcon className="w-6 h-6 sm:w-8 sm:h-8" /> : <Bars3Icon className="w-6 h-6 sm:w-8 sm:h-8" />}
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
                    className={`font-bold tracking-widest font-family-solid-2 text-xs lg:text-sm uppercase tracking-wide py-2 transition-all duration-200 hover:text-color-beige-50 hover:scale-105 ${isActive ? 'is-active text-color-beige-100 font-semibold' : 'text-color-accent'
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
                      className={`font-family-secondary text-base py-3 px-4 block rounded-lg transition-all duration-200 hover:bg-color-beige-600 hover:text-color-accent ${isActive ? 'is-active bg-color-beige-600 text-color-accent font-semibold' : 'text-color-white'
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
      {/* ALTERAÇÃO: Padding vertical (py-16 md:py-20) para aumentar a altura do header */}
      <div className="container mx-auto px-4 py-16 md:py-10">
        <div className="text-center">
          <p className="font-family-solid-2 text-color-white/90 text-lg sm:text-2xl md:text-3xl mb-2">
            Qualidade e design para
          </p>
          <h2 className="font-family-solid-1 text-base sm:text-3xl md:text-3xl font-bold uppercase tracking-widest text-color-white">
            Transformar seu espaço
          </h2>
        </div>
      </div>
    </header>
  );
}
