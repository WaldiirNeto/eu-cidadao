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
    grupo: string | null,
    celular: string | null,
    nomeCidade: string
}