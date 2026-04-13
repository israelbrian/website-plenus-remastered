# Website Plenus Planejados - Remastered

Modernização do website legado desenvolvido em Microsoft FrontPage (2010) para uma aplicação web moderna com visualização dos produtos estilo e-commerce.
## 📋 Objetivo do Projeto

Modernizar o website legado para uma aplicação web moderna, responsiva e performática, seguindo o conteúdo existente no projeto legado, seguindo as melhores práticas de desenvolvimento e melhorando significativamente a experiência do usuário com estrutura de e-commerce.

## 🚀 Stack Tecnológica

### Core
- **Next.js 14+** (App Router) - Framework React com SSG para site estático
- **React 18+** - Biblioteca de interface
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utility-first com Design System centralizado
- **Resend** - Biblioteca para envio de e-mail via api key.

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

### Paleta de cores

Design system em tons de bege, dourado, preto e branco. As definições e o comentário de referência ficam no `tailwind.config.js`:

| Token | Hex | Uso sugerido |
|-------|-----|----------------|
| `color-white` | #ffffff | Fundos claros, texto em fundo escuro |
| `color-black` | #000000 | Preto puro |
| `color-beige-50` | #ede8d0 | Fundo principal (surface) |
| `color-beige-100` | #c4c0ab | Fundos suaves (surface-alt) |
| `color-beige-200` | #9d9988 | Bordas (border) |
| `color-beige-300` | #777567 | Texto secundário |
| `color-beige-400` | #545248 | Texto/UI médio (muted) |
| `color-beige-500` | #4f4d46 | Fundos escuros (ex.: header) |
| `color-beige-600` | #33312b | Texto/UI escuro |
| `color-beige-900` | #141410 | Fundos e texto principais (primary) |
| `color-gold` | #d4c990 | Destaques, botões (accent) |
| `color-whatsapp` | #25D366 | Cor da marca WhatsApp |
| `color-instagram` | #E1306C | Cor da marca Instagram |

#### Aliases semânticos (manutenção centralizada)

Os aliases apontam para tokens da escala acima. Use-os no dia a dia; para mudar o visual do site, altere apenas o valor no `tailwind.config.js`.

- **`color-primary`** (#141410)  
  Texto principal, títulos, botões primários, footer e header escuros. Ex.: `text-color-primary`, `bg-color-primary`, botões “Ver Móveis Planejados”, “Voltar para Produtos”, overlay do hero.

- **`color-surface`** (#ede8d0)  
  Fundo principal da página (body e área de conteúdo). Ex.: `bg-color-surface` no `main` e no `body` (globals.css).

- **`color-surface-alt`** (#c4c0ab)  
  Fundos alternados e áreas destacadas: seções (ex.: “Produtos em Destaque”), chips do header, placeholders de galeria, cards de categoria (estado não selecionado). Ex.: `bg-color-surface-alt`.

- **`color-muted`** (#545248)  
  Texto secundário, descrições, breadcrumbs, ícones e mensagens de apoio. Ex.: `text-color-muted` em parágrafos, “Categoria: …”, “Nenhum produto encontrado”, ícone da busca.

- **`color-border`** (#9d9988)  
  Bordas e divisórias: borda do header, input de busca, thumbnails da galeria (hover), botões da sidebar (hover). Ex.: `border-color-border`, `hover:bg-color-border`.

- **`color-accent`** (#d4c990, mesmo que `color-gold`)  
  Destaques e CTAs (botões de ação, links importantes). Use quando quiser ênfase visual além do primary. Ex.: futuros botões “Comprar” ou links de destaque.

- **`color-white`** (#ffffff)  
  Fundos de cards, inputs e seções claras; texto sobre fundos escuros (título do header, texto do footer, botões primários). Ex.: `bg-color-white`, `text-color-white`.

- **`color-black`** (#000000)  
  Preto puro, quando for necessário contraste máximo (ex.: logos ou elementos específicos).

- **`color-whatsapp`** (#25D366)  
  Cor oficial da marca WhatsApp, utilizada exclusivamente para botões, ícones e links que direcionem para o aplicativo de mensagens.

- **`color-instagram`** (#E1306C)  
  Cor oficial da marca Instagram, utilizada para botões, blocos e ícones referentes à rede social.

**Uso nos componentes:** prefira os aliases semânticos (`color-primary`, `color-surface`, `color-muted`, etc.) para manter significado e manutenção; use a escala numérica (`color-beige-500`, etc.) quando precisar de um tom específico (ex.: header com `bg-color-beige-500`).

### Nomenclatura de Cores - Background

Padrão com a nova paleta (use os tokens da tabela acima):

- `bg-color-primary` – Fundo escuro (footer, botões)
- `bg-color-surface` – Fundo principal da página
- `bg-color-surface-alt` – Fundos alternados (seções, chips)
- `bg-color-white` – Fundos de cards e inputs
- `bg-color-beige-500` – Fundos escuros (ex.: header)

**Uso nos componentes:**
```tsx
<main className="bg-color-surface">
<footer className="bg-color-primary">
<aside className="bg-color-white">
```

### Nomenclatura de Cores - Texto

- `text-color-primary` – Texto principal e títulos
- `text-color-muted` – Texto secundário e descrições
- `text-color-white` – Texto em fundos escuros (header, footer, botões)

**Uso nos componentes:**
```tsx
<h1 className="text-color-primary">
<p className="text-color-muted">
<span className="text-color-white">
```

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

### Nomenclatura de Fontes

O sistema tipográfico foi desenhado para transmitir robustez e elegância, com opções flexíveis para testes.

**Famílias Semânticas (Recomendado):**
Use estas classes no dia a dia. Elas mapeiam para as variáveis CSS definidas no `layout.tsx` e configuradas no `tailwind.config.js`.

| Token | Fonte Padrão | Uso Sugerido |
|-------|-------------|--------------|
| `font-family-title` | **Montserrat** | Títulos principais, headers, chamadas de impacto (Geralmente Bold + Uppercase). |
| `font-family-body` | **Montserrat** | Textos corridos, parágrafos, informações técnicas, menus. |
| `font-family-accent` | **Great Vibes** | Subtítulos elegantes, assinaturas, detalhes manuais ("Qualidade e design"). |
| `font-family-highlight` | **UnifrakturMaguntia** | Destaques góticos/diferenciados (uso específico para campanhas ou detalhes). |

**Opções para Teste de Robustez (Design System):**
Estas classes existem para validar se o layout suporta diferentes tipos de fontes.

*   **Sólidas (Títulos):** `font-family-solid-1` (Montserrat), `font-family-solid-2` (Playfair Display), `font-family-solid-3` (Oswald).
*   **Delicadas (Acentos):** `font-family-delicate-1` (Great Vibes), `font-family-delicate-2` (Dancing Script), `font-family-delicate-3` (Alex Brush).
*   **Góticas (Destaque):** `font-family-gothic-1` (Unifraktur), `font-family-gothic-2` (Pirata One).

**Como testar novas combinações:**
Para mudar o visual do site todo, acesse `tailwind.config.js` e altere a definição de `family-title` ou `family-accent` para apontar para outra variável (ex: mudar de `var(--font-montserrat)` para `var(--font-playfair)`).

**Uso nos componentes:**
```tsx
{/* Título Robusto */}
<h1 className="font-family-title text-4xl font-bold uppercase tracking-widest text-color-primary">
  PLENUS PLANEJADOS
</h1>

{/* Subtítulo Elegante */}
<p className="font-family-accent text-2xl text-color-accent">
  Qualidade e design
</p>
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

## 🖼️ Engenharia de Carrosséis e Galerias (Embla Carousel)

A infraestrutura visual de navegação contínua (presente nas vitrines em destaque na Home e nas Galerias / Lightbox dos produtos isolados) foi estritamente padronizada sob a biblioteca corporativa **Embla Carousel React**. Não existe variação ou duas abordagens distintas de slider no projeto.

### 🛠️ Mecânica Interna e Como dar Manutenção

- **Tracker Dinâmico (Bolinhas Inferiores):** Tanto na tela principal quanto no modal, o comportamento do Paginador (as bolinhas que flutuam embaixo informando a foto atual visualizada) ocorre sem processamento pesado no React. O próprio Embla dispara o ouvinte `emblaApi.on('select')`, atualizando rapidamente o estado local do hook para sincronizar o HTML (Dots).
- **Mouse Wheel Pan (Rodinhas e Touchpads):** Todo carrossel está injetado com o pacote `WheelGesturesPlugin`. Isso significa que usuários da Web no Desktop não precisam clicar segurando e arrastar. Basta usar o scroll lateral normal do MacBook ou scroll do mouse vertical sobre o componente que ele converterá em navegação horizontal em 60 frames por segundo. Não apagar esse plugin de dentro de `useEmblaCarousel([...])`.
- **Prevenção a Bloqueio de Clique no Modal (Overlay Fix):** Na página de Produto, as películas escuras decorativas (`bg-black/10`) sempre devem possuir a propriedade CSS de Tailwild `pointer-events-none`. Se isso for removido num acidente de manutenção, a div superior interceptará seu Click/Touch e matará o arrastamento do Embla e a ativação visual do sistema Fullscreen por baixo dele.

### 📈 Regra de Escalabilidade

**Como alterar a quantidade de itens rodando na Vitrine ou adicionar bolinhas?**
Você nunca irá alterar ou inserir Componentes Manuais no código para expandir a página principal ou bolinhas de carrossel. 

A arquitetura varre organicamente seus Arrays no banco de dados. Siga os dois passos abaixo:
1. Abra o `src/data/products.json` e altere o campo `"destaque": true` (Mudar para false esconde, mudar novos móveis para true vai inseri-los no rodízio).
2. **Atenção à Função Limitadora:** Abra o arquivo utilitário `src/lib/products.ts` e localize a função `getFeaturedProducts()`. Atualmente, ela possui uma trava de segurança chamada `.slice(0, 3)` no final da consulta. Isso significa que ela filtrará sempre um máximo absoluto de 3 produtos da vitrine para preservar a performance, mesmo que você tenha 10 itens como 'destaque: true'. Para exibir mais de 3 itens, basta aumentar esse número no `slice` ou removê-lo completamente. A inteligência do array no front-end cuidará do resto e injetará as bolinhas automáticas perfeitamente.

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

# Executar em modo preview Cloudflare 
npm run preview

# Gera os tipos do TypeScript para recursos da Cloudflare (D1, KV, Vars)
npm run cf-typegen

# Build para produção
npm run build

# Iniciar servidor de produção
npm start

# Executar linter
npm run lint
```

O projeto estará disponível dentro em `https://website-plenus-remastered.zdesenhos.workers.dev/` (Dominio temporario)

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

## 🚀 Deploy e Infraestrutura (Cloudflare Pages + OpenNext)

Este projeto utiliza o **Cloudflare Pages** para hospedagem, aproveitando a infraestrutura global da Cloudflare (Edge Computing). O processo de adaptação do Next.js para o ambiente de Workers é feito através do **OpenNext**.

### 🛠️ Fluxo de Trabalho (CI/CD)

O deploy é **100% automatizado**:
1. Ao realizar um `push` ou `merge` para a branch `main`, o Cloudflare detecta a alteração.
2. O ambiente de build executa o comando `opennextjs-cloudflare build`.
3. O projeto é convertido em um Worker e distribuído globalmente.
4. Não é necessario realizar o build manualmente, o Cloudflare faz isso automaticamente.

### 🌐 Migração de Domínio Oficial (SEO e OpenGraph)

Para assegurar que o site tenha Preview/Thumbnails no WhatsApp, Telegram e Facebook, o sistema (`layout.tsx`) utiliza o objeto universal `metadataBase`.  
Quando o DNS for apontado para o domínio oficial (`plenusplanejados.com.br`), **nenhuma refatoração de código será necessária**. Siga essa etapa no painel da Cloudflare (Project > Settings > Environment Variables):

| Variável (Nome) | Valor de Exemplo | Descrição e Propósito |
|-----------------|------------------|-----------------------|
| `NEXT_PUBLIC_SITE_URL` | `https://plenusplanejados.com.br` | Alimenta toda a árvore de SEO do Next.js, gerando links absolutos. Ex: `/images/a.jpg` passará a constar como `https://plenusplanejados.../images/a.jpg` nos links espelhos. |
| `GOOGLE_SHEETS_CSV_URL` | `https://docs.google.com/spreadshe...` | Rota privada do CMS em CSV responsável por preencher o fluxo das Avaliações/Google Reviews da aba Contato. |

**Importante:** Para realizar testes nativos na sua própria máquina antes de colocar em produção corporativa, crie um arquivo com exato nome `.env.local` (que fica invisível ao GitHub) com essas duas linhas coladas e preenchidas lá dentro.

### 🧪 Teste de Pré-Deploy (Crucial)

#### Checklist de Deploy e Boas Práticas
[ ] **Variáveis de Painel:** Garantir que as variáveis acima foram criadas corretamente no Servidor (Settings > Variables).
[ ] **Limpeza Local:** Para o local, usar e manter o arquivo `.dev.vars` / `.env.local` isolados.

[ ] Compatibilidade: Evite bibliotecas que dependem de recursos pesados do sistema operacional (como child_process), prefira alternativas compatíveis com Web Standards.

Como o ambiente da Cloudflare (Workers) é diferente do Node.js tradicional, algo que funciona no `npm run dev` pode falhar em produção. Para evitar deploys quebrados, utilize o comando de preview:

```
npm run preview
```

## 📄 Licença

Ver arquivo LICENSE para mais informações.

## 👥 Contribuição

Este é um projeto de refatoração. Para sugestões ou melhorias, abra uma issue ou pull request.
