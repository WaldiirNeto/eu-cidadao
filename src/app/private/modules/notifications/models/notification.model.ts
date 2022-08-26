import { PaginacaoModel } from '@shared/models/paginacao.model'

export interface NotificationListModel {

    total: number,
    lista: Array<NotificationModel>
}

export interface NotificationModel {
    id: number
    descricao: string
    titulo: string
    categoriaId: string
    corBackground: string
    corTexto: string
    criticidade: string
    cidadeId: string
    link: string
}

export interface FilterNotificationModel extends PaginacaoModel {
    Titulo?: string
    CidadeId?: number
    CategoriaId?: number
    Nome?: string
    Descricao?: string
    Situacao?: string
}
