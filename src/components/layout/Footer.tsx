'use client';

import Link from 'next/link';
import Image from 'next/image';
import { EnvelopeIcon, PaperAirplaneIcon } from '@heroicons/react/24/solid';
import InstagramIcon from '@/components/icons/InstagramIcon';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-color-primary text-color-beige-100 pt-20 pb-10 border-t border-color-beige-600/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Coluna 1: Marca e Sobre */}
          <div className="flex flex-col gap-6">
            <div className="w-32 h-auto rounded-lg overflow-hidden">
              {/* Ajuste de logo - background branco para contraste se o logo for escuro, ou transparente */}
              <Image
                src="/images/logo/plenus-logo.png"
                alt="Plenus Planejados Logo"
                width={150}
                height={150}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="font-family-body text-sm leading-relaxed text-color-beige-200">
              Transformando sonhos em ambientes planejados com excelência, design e qualidade superior desde 2005.
            </p>
            <div className="flex gap-4">
              {/* Redes Sociais - Ícones com visual moderno */}
              <Link
                href="https://instagram.com/plenusplanejados"
                target="_blank"
                className="w-10 h-10 rounded-full bg-color-beige-600/50 flex items-center justify-center text-color-white hover:bg-color-accent hover:text-color-primary transition-all duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </Link>
              <Link
                href="https://wa.me/3185697977"
                target="_blank"
                className="w-10 h-10 rounded-full bg-color-beige-600/50 flex items-center justify-center text-color-white hover:bg-color-accent hover:text-color-primary transition-all duration-300"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div className="flex flex-col gap-6">
            <h3 className="font-family-title text-xl text-color-white font-bold tracking-wide">Navegação</h3>
            <ul className="flex flex-col gap-3 font-family-body text-sm">
              <li>
                <Link href="/" className="hover:text-color-accent transition-colors duration-200 inline-flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-color-accent opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Início
                </Link>
              </li>
              <li>
                <Link href="/produtos" className="hover:text-color-accent transition-colors duration-200 inline-flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-color-accent opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Produtos
                </Link>
              </li>
              <li>
                <Link href="/#contato" className="hover:text-color-accent transition-colors duration-200 inline-flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-color-accent opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Localização */}
          <div className="flex flex-col gap-6">
            <h3 className="font-family-title text-xl text-color-white font-bold tracking-wide">
              Localização
            </h3>
            <ul className="flex flex-col gap-4 font-family-body text-sm">
              <li className="flex items-start gap-3">
                <Link href="https://www.google.com/maps/place/R.+%C3%89rico+Ver%C3%ADssimo,+1369+-+S%C3%A3o+Jo%C3%A3o+Batista,+Belo+Horizonte+-+MG,+31520-360/@-19.8158081,-43.9778381,17z/data=!3m1!4b1!4m6!3m5!1s0xa68fd1c7e272b3:0x5291f1474997f0d4!8m2!3d-19.8158132!4d-43.9752578!16s%2Fg%2F11c226tx3p?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  className="flex items-center gap-3 text-color-beige-100 hover:text-color-accent transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  <span>
                    Avenida Érico Veríssimo 1369 <br />
                    Santa Mônica - Belo Horizonte / MG
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Contato / Orçamento */}
          <div className="flex flex-col gap-6">
            <h3 className="font-family-title text-xl text-color-white font-bold tracking-wide">Orçamento</h3>
            <p className="font-family-body text-sm text-color-beige-200">
              Deseja renovar seu ambiente? Entre em contato para receber novidades.
            </p>
            <ul className="flex flex-col gap-4 font-family-body text-sm">
              <li>
                <Link href="mailto:vendas@plenusplanejados.com.br" className="flex items-center gap-3 hover:text-color-accent transition-colors">
                  <EnvelopeIcon className="w-5 h-5 text-color-accent" />
                  <span>vendas@plenusplanejados.com.br</span>
                </Link>
              </li>
              <li>
                <Link href="https://wa.me/3185697977" target="_blank" className="flex items-center gap-3 hover:text-color-accent transition-colors">
                  <WhatsAppIcon className="w-5 h-5 text-color-accent" />
                  <span>(31) 8569-7977</span>
                </Link>
              </li>
            </ul>

            {/* <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <div className="flex bg-color-beige-600/30 rounded-lg overflow-hidden border border-color-beige-600/50 focus-within:border-color-accent transition-colors">
                <input 
                  type="email" 
                  placeholder="Seu e-mail" 
                  className="bg-transparent text-sm px-4 py-3 text-color-white placeholder-color-beige-400 focus:outline-none w-full font-family-body"
                />
                <button 
                  type="submit"
                  className="bg-color-accent text-color-primary px-4 hover:bg-color-white transition-colors duration-300"
                  aria-label="Enviar"
                >
                  <PaperAirplaneIcon className="w-5 h-5" />
                </button>
              </div>
              <p className="text-xs text-color-beige-400">
                Livre de spam.
              </p>
            </form> */}
          </div>

        </div>

        {/* Rodapé inferior / Copyright */}
        <div className="text-color-beige-300 border-t border-color-beige-600/30 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-family-body">
          <p>© {currentYear} Plenus Planejados. Todos os direitos reservados.</p>
          <div className="flex gap-2">
            <span className="text-color-beige-300 transition-colors">Desenvolvido por</span>
            <Link href="https://www.linkedin.com/in/israel-brian/" target="_blank">
              <span className="text-color-beige-100 hover:text-color-white cursor-pointer transition-colors">Israel Brian Dev</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
