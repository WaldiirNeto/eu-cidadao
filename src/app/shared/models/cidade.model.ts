export interface ListCityModel {
    total: number,
    lista: Array<CityModel>
}

export interface CityModel {
    id: number,
    nome: string,
    uf: string,
    codigoIbge: number,
    usuarioCriacao: string,
    usuarioAlteracao: string,
    ativo: boolean
}