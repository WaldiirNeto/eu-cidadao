export interface EmployeesModel {
    id: string,
    cidadaoId: string,
    nome: string,
    email: string,
    celular: string,
    dataCriacao: Date,
    cpf: string
}

export interface UpdateEmployeesModel {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    cpf: string,
    dataDeNascimento: string,
    cidadeId: number,
    senha: string,
    celular: string,
}
export interface DeleteAll {
    isDeleteAll: boolean
}