import type { Metadata } from 'next';
import './globals.css';
import Layout from '@/components/layout/Layout';

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="font-family-secondary antialiased">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
