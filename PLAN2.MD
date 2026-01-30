Refatoração Website Plenus Planejados - E-commerce
Objetivo do Projeto
Modernizar o website legado desenvolvido em Microsoft FrontPage (2010) para uma aplicação web moderna tipo e-commerce, com página inicial destacando a empresa, página de produtos com categorização e busca, e páginas de detalhes individuais para cada produto.

Stack Tecnológica
Core
Next.js 14+ (App Router) - Framework React com SSG para site estático
React 18+ - Biblioteca de interface
TypeScript - Tipagem estática (opcional, pode começar com JS)
Tailwind CSS - Framework CSS utility-first
Bibliotecas Complementares
Lucide React ou React Icons - Ícones gratuitos e modernos
next/image - Otimização automática de imagens
Framer Motion (opcional) - Animações suaves
Zustand ou React Context - Gerenciamento de estado (filtros, busca)
Ferramentas de Desenvolvimento
ESLint - Linter para qualidade de código
Prettier - Formatação automática
Git - Controle de versão
Arquitetura do Projeto
Estrutura de Diretórios
website-plenus-remastered/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── layout.tsx               # Layout raiz
│   │   ├── page.tsx                 # Home (página inicial)
│   │   ├── produtos/
│   │   │   ├── page.tsx             # Products (lista de produtos)
│   │   │   └── [categoria]/
│   │   │       └── [id]/
│   │   │           └── page.tsx     # Detalhes do produto
│   │   └── globals.css              # Estilos globais Tailwind
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx           # Header com grid de características
│   │   │   ├── Footer.tsx           # Footer com contatos
│   │   │   └── Layout.tsx           # Layout wrapper
│   │   ├── home/
│   │   │   ├── HeroSection.tsx      # Seção principal com foto grande
│   │   │   ├── AboutSection.tsx     # Informações sobre a empresa
│   │   │   └── FeaturedProducts.tsx  # 3 produtos em destaque
│   │   ├── products/
│   │   │   ├── ProductCard.tsx      # Card de produto (grid)
│   │   │   ├── ProductGrid.tsx      # Grid de produtos
│   │   │   ├── CategorySidebar.tsx  # Sidebar de categorias
│   │   │   └── SearchBar.tsx        # Barra de busca
│   │   └── product-detail/
│   │       ├── ProductGallery.tsx   # Galeria de fotos do produto
│   │       └── ProductInfo.tsx      # Informações e descrição
│   ├── data/
│   │   └── products.json            # Arquivo JSON único com todos os produtos
│   ├── lib/
│   │   ├── utils.ts                 # Funções utilitárias
│   │   └── products.ts              # Funções para manipular produtos
│   └── types/
│       └── index.ts                 # Tipos TypeScript
├── public/
│   └── images/                      # Imagens otimizadas
│       ├── produtos/                # Imagens dos produtos
│       └── empresa/                 # Imagens da empresa
├── website-legado/                  # Código legado (preservado)
├── README.md
├── package.json
├── tsconfig.json (ou jsconfig.json)
├── tailwind.config.js
└── next.config.js
Estrutura de Páginas
1. Home (app/page.tsx)
Rota: /

Conteúdo:

Hero Section: Foto principal grande de apresentação da empresa
About Section: Informações gerais sobre a Plenus Planejados
Featured Products: Div com 3 produtos em destaque (cards)
CTA Button: Botão "Ver Móveis Planejados" que redireciona para /produtos
Componentes:

HeroSection.tsx - Imagem hero com overlay/texto opcional
AboutSection.tsx - Texto sobre a empresa
FeaturedProducts.tsx - Grid de 3 produtos destacados
Botão de redirecionamento usando next/link
2. Products (app/produtos/page.tsx)
Rota: /produtos

Funcionalidades:

Layout: Grid de produtos (estilo e-commerce)
Sidebar Esquerda: Filtro por categorias (Armários, Cama, Rack, etc.)
Barra de Busca: Campo de busca no topo
Product Grid: Cards de produtos em grid responsivo
Filtros: Filtro por categoria + busca por texto
Componentes:

CategorySidebar.tsx - Menu lateral de categorias (estilo Kabum)
SearchBar.tsx - Input de busca com ícone
ProductGrid.tsx - Container do grid
ProductCard.tsx - Card individual de produto
Comportamento:

Ao clicar em categoria na sidebar → filtra produtos
Ao digitar na busca → filtra produtos por nome/descrição
Ao clicar em produto → redireciona para `/produtos/[categoria]/[id]`
3. Product Detail (`app/produtos/[categoria]/[id]/page.tsx`)
Rota: /produtos/armarios/1, /produtos/cama/2, etc.

Conteúdo:

Galeria de Fotos: Múltiplas imagens do produto (lightbox)
Informações: Nome, categoria, descrição detalhada
Navegação: Botão voltar ou breadcrumb
Componentes:

ProductGallery.tsx - Galeria com imagem principal + thumbnails
ProductInfo.tsx - Nome, descrição, características
Estrutura de Dados (JSON)
Arquivo: src/data/products.json
{
  "produtos": [
    {
      "id": 1,
      "nome": "Armário Planejado Moderno",
      "categoria": "armarios",
      "categoriaSlug": "armarios",
      "imagemPrincipal": "/images/produtos/armarios/armario-01.jpg",
      "imagens": [
        "/images/produtos/armarios/armario-01.jpg",
        "/images/produtos/armarios/armario-02.jpg",
        "/images/produtos/armarios/armario-03.jpg"
      ],
      "descricao": "Armário planejado em MDF com acabamento premium...",
      "destaque": true,
      "relevancia": 5
    }
  ],
  "categorias": [
    {
      "slug": "armarios",
      "nome": "Armários",
      "icone": "armario"
    },
    {
      "slug": "cama",
      "nome": "Cama",
      "icone": "cama"
    }
  ]
}
Campos do Produto:

id: Identificador único
nome: Nome do produto
categoria: Categoria (armarios, cama, rack, etc.)
categoriaSlug: Slug para URL
imagemPrincipal: Imagem para card/grid
imagens: Array de imagens para página de detalhes
descricao: Descrição completa do produto
destaque: Boolean - se aparece na home (3 produtos)
relevancia: Número (1-5) para ordenação
Componentes Principais
Layout Components
1. Layout (components/layout/Layout.tsx)
Wrapper principal com Header + Content + Footer
Gerencia estrutura responsiva
2. Header (components/layout/Header.tsx)
Título "Plenus Planejados"
Grid responsivo com características (9 itens)
Layout mobile-first
3. Footer (components/layout/Footer.tsx)
Endereço centralizado
Redes sociais (Instagram, WhatsApp, Email)
Ícones clicáveis
Home Components
4. HeroSection (components/home/HeroSection.tsx)
Imagem hero full-width
Overlay opcional com texto
Responsivo
5. AboutSection (components/home/AboutSection.tsx)
Texto sobre a empresa
Layout responsivo com espaçamento adequado
6. FeaturedProducts (components/home/FeaturedProducts.tsx)
Grid de 3 produtos
Usa ProductCard reutilizável
Botão "Ver Móveis Planejados" → /produtos
Products Components
7. CategorySidebar (components/products/CategorySidebar.tsx)
Lista de categorias no lado esquerdo
Filtro ativo destacado
Em mobile: pode ser drawer/modal
Estilo similar ao Kabum
8. SearchBar (components/products/SearchBar.tsx)
Input de busca com ícone
Estado controlado
Filtra produtos em tempo real
9. ProductGrid (components/products/ProductGrid.tsx)
Container do grid
Responsivo (1 col mobile, 2-3 tablet, 4+ desktop)
Renderiza ProductCard para cada produto
10. ProductCard (components/products/ProductCard.tsx)
Card de produto
Imagem, nome, categoria
Link para página de detalhes
Hover effects
Product Detail Components
11. ProductGallery (components/product-detail/ProductGallery.tsx)
Imagem principal grande
Thumbnails abaixo
Lightbox ao clicar
Navegação entre imagens
12. ProductInfo (components/product-detail/ProductInfo.tsx)
Nome do produto
Categoria
Descrição completa
Breadcrumb/navegação
Regras de Negócio
Design e UX
Mobile First: Desenvolvimento priorizando dispositivos móveis
Responsividade: Suporte completo mobile, tablet e desktop
E-commerce Style: Layout similar a lojas online (Kabum, Amazon)
Performance: Lighthouse score mínimo 90+
SEO: Meta tags, structured data, sitemap
Funcionalidades
Home
3 produtos em destaque (filtrados por destaque: true e relevancia)
Foto hero responsiva
Informações sobre empresa
Products
Grid responsivo de produtos
Sidebar de categorias sempre visível (desktop)
Busca filtra por nome e descrição
Filtro por categoria atualiza URL (opcional) ou estado
Ordenação por relevância (mais relevantes primeiro)
Product Detail
Galeria com todas as imagens do produto
Descrição completa
Navegação para voltar ou próximo produto
Categorias
Mapeamento das categorias legado:

armarios - Armários
banho - Banho
cama - Cama
closet - Closet
cozinha - Cozinha
escritorio - Escritório
estante - Estante
juvenil - Juvenil
rusticos - Rústicos
painel - Painel
rack - Rack
junco - Junco/Fibra Sintética
estofamento - Estofamento
Padrões de Desenvolvimento
Código
Componentes funcionais com hooks
TypeScript opcional (pode começar com JS)
Nomenclatura em inglês para código, português para conteúdo
Componentes pequenos e reutilizáveis
Estilização
Tailwind CSS utility classes
Design system consistente
Cards com hover effects
Transições suaves
Dados
JSON único centralizado
Funções utilitárias para filtrar/buscar produtos
Type safety com TypeScript (se usado)

## Design System e Manutenibilidade

### Centralização de Estilos

Todas as definições de cores, fontes e estilização devem ser centralizadas no arquivo `tailwind.config.js` para facilitar manutenção e garantir consistência visual em todo o projeto.

**Princípio:** Qualquer alteração de cor, fonte ou estilo deve ser feita apenas no `tailwind.config.js`, sem necessidade de modificar componentes individuais.

### Nomenclatura de Cores - Background

Padrão de nomenclatura para cores de fundo:

- `bg-color-primary` - Cor primária de fundo
- `bg-color-secondary` - Cor secundária de fundo
- `bg-color-tertiary` - Cor terciária de fundo
- `bg-color-quaternary` - Cor quaternária de fundo

**Uso nos componentes:**
```tsx
<div className="bg-color-primary">
<div className="bg-color-secondary">
```

**Configuração no `tailwind.config.js`:**
```js
theme: {
  extend: {
    colors: {
      'color-primary': '#HEXCODE',
      'color-secondary': '#HEXCODE',
      'color-tertiary': '#HEXCODE',
      'color-quaternary': '#HEXCODE',
    }
  }
}
```

### Nomenclatura de Cores - Texto

Padrão de nomenclatura para cores de texto (podem ser diferentes das cores de background):

- `text-color-primary` - Cor primária de texto
- `text-color-secondary` - Cor secundária de texto
- `text-color-tertiary` - Cor terciária de texto
- `text-color-quaternary` - Cor quaternária de texto

**Uso nos componentes:**
```tsx
<h1 className="text-color-primary">
<p className="text-color-secondary">
```

**Nota:** As cores de texto podem ser as mesmas ou diferentes das cores de background, dependendo do design. Devem ser definidas separadamente no `tailwind.config.js` para flexibilidade.

### Nomenclatura de Fontes

Seguindo boas práticas de desenvolvimento web, a nomenclatura de fontes deve seguir o padrão:

**Famílias de Fontes:**
- `font-family-primary` - Fonte principal (headings, títulos)
- `font-family-secondary` - Fonte secundária (corpo de texto, parágrafos)
- `font-family-accent` - Fonte de destaque (botões, CTAs, destaques)

**Tamanhos de Fonte (Scale):**
- `text-xs` - Extra pequeno (0.75rem / 12px)
- `text-sm` - Pequeno (0.875rem / 14px)
- `text-base` - Base (1rem / 16px)
- `text-lg` - Grande (1.125rem / 18px)
- `text-xl` - Extra grande (1.25rem / 20px)
- `text-2xl` - 2x grande (1.5rem / 24px)
- `text-3xl` - 3x grande (1.875rem / 30px)
- `text-4xl` - 4x grande (2.25rem / 36px)
- `text-5xl` - 5x grande (3rem / 48px)

**Pesos de Fonte:**
- `font-light` - 300
- `font-normal` - 400
- `font-medium` - 500
- `font-semibold` - 600
- `font-bold` - 700
- `font-extrabold` - 800

**Uso nos componentes:**
```tsx
<h1 className="font-family-primary text-4xl font-bold text-color-primary">
<p className="font-family-secondary text-base font-normal text-color-secondary">
```

**Configuração no `tailwind.config.js`:**
```js
theme: {
  extend: {
    fontFamily: {
      'family-primary': ['Nome da Fonte', 'fallback'],
      'family-secondary': ['Nome da Fonte', 'fallback'],
      'family-accent': ['Nome da Fonte', 'fallback'],
    }
  }
}
```

### Estrutura do `tailwind.config.js`

O arquivo de configuração deve ser organizado da seguinte forma:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Cores de Background
      colors: {
        'color-primary': '#HEXCODE',
        'color-secondary': '#HEXCODE',
        'color-tertiary': '#HEXCODE',
        'color-quaternary': '#HEXCODE',
        // Adicionar outras cores específicas do projeto
      },
      // Famílias de Fontes
      fontFamily: {
        'family-primary': ['Fonte Primária', 'sans-serif'],
        'family-secondary': ['Fonte Secundária', 'sans-serif'],
        'family-accent': ['Fonte Destaque', 'sans-serif'],
      },
      // Outras customizações (spacing, borderRadius, etc.)
    },
  },
  plugins: [],
}
```

### Benefícios da Centralização

1. **Manutenibilidade:** Alterações de design em um único lugar
2. **Consistência:** Garante uso uniforme de cores e fontes
3. **Escalabilidade:** Fácil adicionar novas cores/fontes sem quebrar código existente
4. **Colaboração:** Facilita trabalho em equipe com padrões claros
5. **Refatoração:** Mudanças de design não requerem busca em múltiplos arquivos

### Regras de Uso

1. **NUNCA** usar cores hardcoded nos componentes (ex: `bg-[#FF0000]`)
2. **SEMPRE** usar as classes padronizadas do design system
3. **SEMPRE** adicionar novas cores/fontes no `tailwind.config.js` antes de usar
4. **DOCUMENTAR** no README as cores e fontes utilizadas e seus propósitos

Fases de Implementação
Fase 1: Setup e Estrutura Base
Inicializar projeto Next.js
Configurar Tailwind CSS
Configurar Design System no tailwind.config.js (cores, fontes, nomenclaturas padronizadas)
Criar estrutura de diretórios
Configurar ESLint e Prettier
Criar README.md completo (incluindo documentação do Design System)
Fase 2: Componentes de Layout
Implementar Layout base
Criar Header com grid responsivo
Criar Footer com informações de contato
Integrar no layout principal
Fase 3: Estrutura de Dados
Criar arquivo products.json com estrutura
Migrar dados do legado para JSON
Criar funções utilitárias para manipular produtos
Tipos TypeScript (se usado)
Fase 4: Página Home
Criar HeroSection
Criar AboutSection
Criar FeaturedProducts
Integrar componentes na página inicial
Botão de redirecionamento
Fase 5: Página Products
Criar CategorySidebar
Criar SearchBar
Criar ProductCard
Criar ProductGrid
Implementar lógica de filtros e busca
Integrar tudo na página /produtos
Fase 6: Página Product Detail
Criar ProductGallery
Criar ProductInfo
Implementar rota dinâmica `[categoria]/[id]`
Integrar componentes
Navegação/breadcrumb
Fase 7: Migração de Imagens
Migrar imagens do legado
Otimizar imagens
Organizar por categoria
Atualizar paths no JSON
Fase 8: Polimento e Otimização
Ajustes de responsividade
Otimização de performance
SEO e meta tags
Testes em diferentes dispositivos
Ajustes de UX
Arquivos Principais a Criar
README.md - Documentação completa
tailwind.config.js - **CRÍTICO:** Configuração centralizada de cores, fontes e estilos (Design System)
src/app/layout.tsx - Layout raiz
src/app/page.tsx - Home
src/app/produtos/page.tsx - Products
`src/app/produtos/[categoria]/[id]/page.tsx` - Product Detail
src/data/products.json - Dados dos produtos
src/components/layout/Header.tsx - Header
src/components/layout/Footer.tsx - Footer
src/components/home/HeroSection.tsx - Hero
src/components/home/FeaturedProducts.tsx - Produtos destaque
src/components/products/CategorySidebar.tsx - Sidebar categorias
src/components/products/SearchBar.tsx - Busca
src/components/products/ProductCard.tsx - Card produto
src/components/products/ProductGrid.tsx - Grid produtos
src/components/product-detail/ProductGallery.tsx - Galeria
src/lib/products.ts - Funções utilitárias produtos