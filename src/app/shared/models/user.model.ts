export interface UserModel {
    id: string,
    nomeCompleto: string,
    primeiroNome: string,
    ultimoNome: string,
    email: string,
    emailVerificado: boolean,
    cpf: string,
    cidadeId: number,
    dataNascimento: string,
    roles: Array<any>,
    grupo: string,
    celular: string | null,
    nomeCidade: string
}

export interface UserUpdateModel {
    id: string
    firstName: string
    lastName: string
    email: string
    cpf: string
    dataDeNascimento: string
    cidadeId: number
    senha?: string
    celular: string
    cidadaoId: string
    senhaAtual: string
    novaSenha: string
    foto: string
}