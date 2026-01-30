import { Instagram, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-color-primary text-color-quaternary py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          {/* Endereço */}
          <div className="text-center">
            <p className="font-family-secondary text-sm md:text-base">
              Avenida Érico Veríssimo, 1.369 - Santa Mônica - Belo Horizonte /
              MG
            </p>
          </div>

          {/* Redes Sociais */}
          <div className="flex items-center justify-center gap-6">
            {/* Instagram */}
            <Link
              href="https://instagram.com/plenusplanejados"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              aria-label="Instagram"
            >
              <Instagram size={24} />
              <span className="font-family-secondary text-sm">
                @plenusplanejados
              </span>
            </Link>

            {/* WhatsApp */}
            <Link
              href="https://wa.me/55319966407544"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              aria-label="WhatsApp"
            >
              <Phone size={24} />
              <span className="font-family-secondary text-sm">
                (31) 99664-07544
              </span>
            </Link>

            {/* Email */}
            <Link
              href="mailto:vendas@plenusplanejados.com.br"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              aria-label="Email"
            >
              <Mail size={24} />
              <span className="font-family-secondary text-sm">
                vendas@plenusplanejados.com.br
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
