# Website Plenus Planejados - Remastered

Modernização do website legado desenvolvido em Microsoft FrontPage (2010) para uma aplicação web moderna tipo e-commerce, utilizando Next.js, React e Tailwind CSS.

## 📋 Objetivo do Projeto

Modernizar o website legado para uma aplicação web moderna, responsiva e performática, mantendo todo o conteúdo existente e melhorando significativamente a experiência do usuário com estrutura de e-commerce.

## 🚀 Stack Tecnológica

### Core
- **Next.js 14+** (App Router) - Framework React com SSG para site estático
- **React 18+** - Biblioteca de interface
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utility-first com Design System centralizado

### Bibliotecas Complementares
- **Lucide React** - Ícones gratuitos e modernos
- **next/image** - Otimização automática de imagens
- **clsx** e **tailwind-merge** - Utilitários para classes CSS

### Ferramentas de Desenvolvimento
- **ESLint** - Linter para qualidade de código
- **Prettier** - Formatação automática
- **Git** - Controle de versão

## 📁 Estrutura de Diretórios

```
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
│   │   ├── layout/                  # Componentes de layout
│   │   ├── home/                    # Componentes da página inicial
│   │   ├── products/                # Componentes da página de produtos
│   │   └── product-detail/          # Componentes de detalhes
│   ├── data/
│   │   └── products.json           # Arquivo JSON único com todos os produtos
│   ├── lib/
│   │   ├── utils.ts                 # Funções utilitárias
│   │   └── products.ts             # Funções para manipular produtos
│   └── types/
│       └── index.ts                 # Tipos TypeScript
├── public/
│   └── images/                      # Imagens otimizadas
│       ├── produtos/                # Imagens dos produtos
│       └── empresa/                 # Imagens da empresa
├── website-legado/                  # Código legado (preservado)
└── [arquivos de configuração]
```

## 🎨 Design System e Manutenibilidade

### Centralização de Estilos

**CRÍTICO:** Todas as definições de cores, fontes e estilização estão centralizadas no arquivo `tailwind.config.js` para facilitar manutenção e garantir consistência visual em todo o projeto.

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

### Nomenclatura de Fontes

Seguindo boas práticas de desenvolvimento web:

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

### Regras de Uso do Design System

1. **NUNCA** usar cores hardcoded nos componentes (ex: `bg-[#FF0000]`)
2. **SEMPRE** usar as classes padronizadas do design system
3. **SEMPRE** adicionar novas cores/fontes no `tailwind.config.js` antes de usar
4. **DOCUMENTAR** no README as cores e fontes utilizadas e seus propósitos

### Benefícios da Centralização

1. **Manutenibilidade:** Alterações de design em um único lugar
2. **Consistência:** Garante uso uniforme de cores e fontes
3. **Escalabilidade:** Fácil adicionar novas cores/fontes sem quebrar código existente
4. **Colaboração:** Facilita trabalho em equipe com padrões claros
5. **Refatoração:** Mudanças de design não requerem busca em múltiplos arquivos

## 📄 Estrutura de Páginas

### 1. Home (`app/page.tsx`)
**Rota:** `/`

**Conteúdo:**
- Hero Section: Foto principal grande de apresentação da empresa
- About Section: Informações gerais sobre a Plenus Planejados
- Featured Products: Div com 3 produtos em destaque (cards)
- CTA Button: Botão "Ver Móveis Planejados" que redireciona para `/produtos`

### 2. Products (`app/produtos/page.tsx`)
**Rota:** `/produtos`

**Funcionalidades:**
- Layout: Grid de produtos (estilo e-commerce)
- Sidebar Esquerda: Filtro por categorias (Armários, Cama, Rack, etc.)
- Barra de Busca: Campo de busca no topo
- Product Grid: Cards de produtos em grid responsivo
- Filtros: Filtro por categoria + busca por texto

### 3. Product Detail (`app/produtos/[categoria]/[id]/page.tsx`)
**Rota:** `/produtos/armarios/1`, `/produtos/cama/2`, etc.

**Conteúdo:**
- Galeria de Fotos: Múltiplas imagens do produto (lightbox)
- Informações: Nome, categoria, descrição detalhada
- Navegação: Botão voltar ou breadcrumb

## 📊 Estrutura de Dados

Arquivo único: `src/data/products.json` com todos os produtos e categorias.

**Campos do Produto:**
- `id`: Identificador único
- `nome`: Nome do produto
- `categoria`: Categoria (armarios, cama, rack, etc.)
- `categoriaSlug`: Slug para URL
- `imagemPrincipal`: Imagem para card/grid
- `imagens`: Array de imagens para página de detalhes
- `descricao`: Descrição completa do produto
- `destaque`: Boolean - se aparece na home (3 produtos)
- `relevancia`: Número (1-5) para ordenação

## 🏷️ Categorias

Mapeamento das categorias legado:

- `armarios` - Armários
- `banho` - Banho
- `cama` - Cama
- `closet` - Closet
- `cozinha` - Cozinha
- `escritorio` - Escritório
- `estante` - Estante
- `juvenil` - Juvenil
- `rusticos` - Rústicos
- `painel` - Painel
- `rack` - Rack
- `junco` - Junco/Fibra Sintética
- `estofamento` - Estofamento

## 📞 Informações de Contato

- **Endereço:** Avenida Érico Veríssimo, 1.369 - Santa Mônica - Belo Horizonte / MG
- **Instagram:** @plenusplanejados
- **WhatsApp:** (31) 99664-07544
- **Email:** vendas@plenusplanejados.com.br

## 🛠️ Instalação e Desenvolvimento

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Instalação

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start

# Executar linter
npm run lint
```

O projeto estará disponível em `http://localhost:3000`

## 📝 Padrões de Desenvolvimento

### Código
- Componentes funcionais com hooks
- TypeScript para tipagem
- Nomenclatura em inglês para código, português para conteúdo
- Componentes pequenos e reutilizáveis

### Estilização
- Tailwind CSS utility classes
- Design system consistente (usar classes padronizadas)
- Cards com hover effects
- Transições suaves

### Dados
- JSON único centralizado
- Funções utilitárias para filtrar/buscar produtos
- Type safety com TypeScript

## 🎯 Regras de Negócio

### Design e UX
- **Mobile First:** Desenvolvimento priorizando dispositivos móveis
- **Responsividade:** Suporte completo mobile, tablet e desktop
- **E-commerce Style:** Layout similar a lojas online (Kabum, Amazon)
- **Performance:** Lighthouse score mínimo 90+
- **SEO:** Meta tags, structured data, sitemap

## 📦 Deploy

O projeto está configurado para export estático (SSG). Para deploy:

1. Execute `npm run build`
2. A pasta `out/` conterá os arquivos estáticos
3. Faça upload para qualquer serviço de hospedagem estática

**Recomendação:** Vercel (deploy automático via Git)

## 📄 Licença

Ver arquivo LICENSE para mais informações.

## 👥 Contribuição

Este é um projeto de refatoração. Para sugestões ou melhorias, abra uma issue ou pull request.
