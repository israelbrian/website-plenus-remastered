import type { Metadata, Viewport } from 'next';
import './globals.css';
import Layout from '@/components/layout/Layout';
import {
  Montserrat,
  Playfair_Display,
  Oswald,
  Great_Vibes,
  Dancing_Script,
  Alex_Brush,
  UnifrakturMaguntia,
  Pirata_One,
} from 'next/font/google';

// Configuração das fontes
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
});

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-great-vibes',
  display: 'swap',
});

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing-script',
  display: 'swap',
});

const alexBrush = Alex_Brush({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-alex-brush',
  display: 'swap',
});

const unifraktur = UnifrakturMaguntia({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-unifraktur',
  display: 'swap',
});

const pirataOne = Pirata_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pirata',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#ede8d0',
};

export const metadata: Metadata = {
  title: {
    default: 'Plenus Planejados - Móveis Planejados',
    template: '%s | Plenus Planejados',
  },
  description:
    'Móveis planejados 100% MDF, decoração, projetos e muito mais. Armários, cozinhas, quartos e escritórios planejados em Belo Horizonte.',
  keywords: [
    'móveis planejados',
    'armários planejados',
    'cozinha planejada',
    'MDF',
    'decoração',
    'Belo Horizonte',
    'Plenus Planejados',
  ],
  authors: [{ name: 'Plenus Planejados' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://plenusplanejados.com.br',
    siteName: 'Plenus Planejados',
    title: 'Plenus Planejados - Móveis Planejados',
    description:
      'Móveis planejados 100% MDF, decoração, projetos e muito mais em Belo Horizonte.',
  },
  icons: {
    icon: [
      { url: '/images/favicon/favicon.ico' },
      { url: '/images/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/images/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/images/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/images/favicon/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${montserrat.variable} ${playfair.variable} ${oswald.variable} ${greatVibes.variable} ${dancingScript.variable} ${alexBrush.variable} ${unifraktur.variable} ${pirataOne.variable} font-family-body antialiased`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
