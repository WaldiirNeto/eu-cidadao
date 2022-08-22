export interface OcorrenciaListModel {
    total: number,
    lista: Array<OcorrenciaModel>
}

export interface OcorrenciaModel {
    id: number,
    enderecoId: number,
    situacaoId: number,
    titulo: string,
    comentarioCidadao: string,
    comentarioGestor: string,
    despachado: boolean,
    cidadaoId: string,
    ativo: boolean,
    dataCriacao: string,
    usuarioDespachanteId: string,
    subCategoriaOcorrenciaId: number,
    documentos: Array<DocumentosModel>,
    endereco: EnderecoModel,
    historicoOcorrencias: Array<HistoricoOcorrenciaModel>
    situacao: SituacaoOcorrenciaModel,
    subCategoriaOcorrencia: SubCategoriaOcorrenciaModel
    categoriaOcorrencia: CategoriaOcorrenciaModel
}

export interface DocumentosModel {
    id: number,
    arquivo: string,
    extensao: string,
    ativo: boolean
}

export interface EnderecoModel {
    id: number,
    rua: string,
    numero: number,
    complemento: string,
    bairro: string,
    cep: string,
    cidade: string,
    uf: string,
    ativo: boolean,
    latitude: number,
    longitude: number,
    placeId: string,
    pontoDeReferencia: string,
    localizacaoFormatada: string
}

export interface HistoricoOcorrenciaModel {
    id: number,
    situacaoId: number,
    ativo: boolean,
    ocorrenciaId: number,
    cidadaoId: string
}

export interface SituacaoOcorrenciaModel {
    id: number,
    nome: string,
    descricao: string,
    ativo: boolean,
    situacaoDeRecusa: boolean
}

export interface SubCategoriaOcorrenciaModel {
    id: number,
    categoriaOcorrenciaId: number,
    nome: string,
    descricao: string,
    ativo: boolean
}

export interface CategoriaOcorrenciaModel {
    id: number,
    nome: string,
    descricao: string,
    ativo: boolean,
    caminhoImagemMenu: string,
    caminhoImagemTela: string,
    subCategoriasOcorrencias: Array<SubCategoriaOcorrenciaModel>

}
