export interface Product {
  id: number;
  nome: string;
  categoria: string;
  categoriaSlug: string;
  imagemPrincipal: string;
  imagens: string[];
  descricao: string;
  destaque: boolean;
  relevancia: number;
}

export interface Category {
  slug: string;
  nome: string;
  icone: string;
}

export interface ProductsData {
  produtos: Product[];
  categorias: Category[];
}
