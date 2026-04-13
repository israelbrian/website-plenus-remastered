Refatoração Website Plenus Planejados
Objetivo do Projeto
Modernizar o website legado desenvolvido em Microsoft FrontPage (2010) para uma aplicação web moderna, responsiva e performática, mantendo todo o conteúdo existente e melhorando significativamente a experiência do usuário.

Stack Tecnológica
Core
Next.js 14+ (App Router) - Framework React com SSG para site estático
React 18+ - Biblioteca de interface
TypeScript - Tipagem estática para maior segurança
Tailwind CSS - Framework CSS utility-first
Vite - Não necessário (Next.js já inclui bundler otimizado)
Bibliotecas Complementares
Lucide React ou React Icons - Ícones gratuitos e modernos
next/image - Otimização automática de imagens
Framer Motion (opcional) - Animações suaves
React Hook Form (se necessário formulários) - Gerenciamento de formulários
Ferramentas de Desenvolvimento
ESLint - Linter para qualidade de código
Prettier - Formatação automática
Git - Controle de versão
Arquitetura do Projeto
Estrutura de Diretórios
website-plenus-remastered/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Layout raiz
│   │   ├── page.tsx           # Página inicial
│   │   ├── [categoria]/       # Rotas dinâmicas por categoria
│   │   └── globals.css        # Estilos globais Tailwind
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx     # Componente header
│   │   │   ├── Footer.tsx     # Componente footer
│   │   │   └── Layout.tsx     # Layout wrapper
│   │   ├── gallery/
│   │   │   └── ImageGallery.tsx # Galeria de imagens
│   │   └── navigation/
│   │       └── Sidebar.tsx    # Menu lateral (mobile/desktop)
│   ├── lib/
│   │   └── utils.ts           # Funções utilitárias
│   └── types/
│       └── index.ts            # Tipos TypeScript
├── public/
│   └── images/                 # Imagens otimizadas
├── website-legado/             # Código legado (preservado)
├── README.md                   # Este arquivo
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
Componentes Principais
1. Layout (components/layout/Layout.tsx)
Wrapper principal que inclui Header, conteúdo dinâmico e Footer
Gerencia estrutura responsiva
2. Header (components/layout/Header.tsx)
Título "Plenus Planejados"
Grid responsivo com características (adaptável, não fixo 9x9)
Layout mobile-first: em mobile vira lista/coluna, em desktop vira grid
Itens: 100% MDF, Decoração, Projetos, Junco Sintético, Junco Natural, Rústicos, Estofamento, Garantia, Pontualidade
3. Footer (components/layout/Footer.tsx)
Endereço centralizado
Redes sociais com ícones (Instagram, WhatsApp, Email)
Layout responsivo centralizado
4. ImageGallery (components/gallery/ImageGallery.tsx)
Componente reutilizável para exibir galerias de produtos
Suporta lightbox/modal para visualização ampliada
Grid responsivo de imagens
5. Navigation/Sidebar (components/navigation/Sidebar.tsx)
Menu de categorias (substitui menu lateral legado)
Em mobile: hamburger menu
Em desktop: sidebar ou menu horizontal
Regras de Negócio
Design e UX
Mobile First: Desenvolvimento priorizando dispositivos móveis
Responsividade: Suporte completo para mobile, tablet e desktop
Acessibilidade: Seguir WCAG 2.1 nível AA
Performance: Lighthouse score mínimo 90+
SEO: Meta tags, structured data, sitemap
Estrutura de Páginas
Todas as páginas compartilham o mesmo layout base (Header + Content + Footer)
Conteúdo dinâmico renderizado via props/children
Navegação entre categorias de produtos mantida
Categorias de Produtos
Mapeamento das páginas legado para rotas Next.js:

/armario - Armários
/banho - Banho
/cama - Cama
/closet - Closet
/cozinha - Cozinha
/escritorio - Escritório
/estante - Estante
/juvenil - Juvenil
/macicos ou /rusticos - Rústicos
/painel - Painel
/rack - Rack
/fibra ou /junco - Junco/Fibra Sintética
/estofado ou /estofamento - Estofamento
Informações de Contato
Endereço: Avenida Érico Veríssimo, 1.369 - Santa Mônica - Belo Horizonte / MG
Instagram: @plenusplanejados
WhatsApp: (31) 99664-07544 (link direto para conversa)
Email: vendas@plenusplanejados.com.br
Padrões de Desenvolvimento
Código
Componentes funcionais com hooks
TypeScript strict mode
Nomenclatura em inglês para código, português para conteúdo
Componentes pequenos e reutilizáveis
Props tipadas com TypeScript
Estilização
Tailwind CSS utility classes
Classes customizadas apenas quando necessário
Design system consistente (cores, espaçamentos, tipografia)
Dark mode (opcional, futuro)
Imagens
Usar next/image para otimização automática
Formatos modernos (WebP quando possível)
Lazy loading nativo
Alt text descritivo para acessibilidade
Fases de Implementação
Fase 1: Setup e Estrutura Base
Inicializar projeto Next.js com TypeScript
Configurar Tailwind CSS
Criar estrutura de diretórios
Configurar ESLint e Prettier
Criar README.md completo
Fase 2: Componentes de Layout
Implementar componente Layout base
Criar Header com grid responsivo
Criar Footer com informações de contato
Integrar componentes no layout principal
Fase 4: Páginas e Navegação
Criar página inicial (home)
Implementar rotas dinâmicas para categorias
Criar componente de navegação (sidebar/menu)
Migrar conteúdo das páginas legado
Fase 5: Galerias de Imagens
Criar componente ImageGallery
Implementar lightbox/modal
Migrar imagens do legado
Otimizar imagens
Fase 6: Polimento e Otimização
Ajustes de responsividade
Otimização de performance
SEO e meta tags
Testes em diferentes dispositivos
Arquivos Principais a Criar
README.md - Documentação completa do projeto
src/app/layout.tsx - Layout raiz Next.js
src/app/page.tsx - Página inicial
src/components/layout/Header.tsx - Header com grid
src/components/layout/Footer.tsx - Footer
src/components/layout/Layout.tsx - Wrapper de layout
src/components/gallery/ImageGallery.tsx - Galeria
package.json - Dependências
tailwind.config.js - Configuração Tailwind
next.config.js - Configuração Next.js