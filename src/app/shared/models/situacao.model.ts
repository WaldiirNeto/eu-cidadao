export interface ListSituacaoModel {
    total: number
    lista: SituacaoModel[]
}

export interface SituacaoModel {
    id: number,
    nome: string,
    descricao: string,
    ativo: boolean,
    situacaoDeRecusa: boolean
}