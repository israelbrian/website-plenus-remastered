import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import InstagramIcon from '@/components/icons/InstagramIcon';

export default function Footer() {
  return (
    <footer id="contato" className="bg-color-primary text-color-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          {/* Endereço */}
          <div className="text-center">
            <p className="font-family-secondary text-sm md:text-base">
              Avenida Érico Veríssimo 1369 - Santa Mônica - Belo Horizonte /
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
              className="flex items-center gap-2 hover:text-color-accent transition-opacity"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-6 h-6" />
              <span className="font-family-secondary text-sm">
                @plenusplanejados
              </span>
            </Link>

            {/* WhatsApp */}
            <Link
              href="https://wa.me/55319966407544"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-color-accent transition-opacity"
              aria-label="WhatsApp"
            >
              <PhoneIcon className="w-6 h-6" />
              <span className="font-family-secondary text-sm">
                (31) 99664-07544
              </span>
            </Link>

            {/* Email */}
            <Link
              href="mailto:vendas@plenusplanejados.com.br"
              className="flex items-center gap-2 hover:text-color-accent transition-opacity"
              aria-label="Email"
            >
              <EnvelopeIcon className="w-6 h-6" />
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
