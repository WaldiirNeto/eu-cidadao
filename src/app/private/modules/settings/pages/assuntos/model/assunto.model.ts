export interface Assunto {
    id: number,
    assunto: string
    responsavel_area: string
    email: string
    telefone: string
    categorias: string
}

export interface ListCategoriaModel {
    total: number,
    lista: Array<CategoriaModel>
}

export interface CategoriaModel {
    id: number,
    nome: string,
    descricao: string,
    ativo: boolean,
    caminhoImagemMenu: string,
    caminhoImagemTela: string
}

