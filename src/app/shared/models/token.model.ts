export interface TokenModel {
    exp: number,
    iat: number,
    jti: string,
    iss: string,
    aud: string,
    sub: string,
    typ: string,
    azp: string,
    session_state: string,
    acr: number,
    scope: string,
    sid: string,
    cidadeId: number,
    email_verified: boolean,
    data_nascimento: string,
    roles: Array<string>,
    name: string,
    celular: number,
    groups: Array<string>,
    preferred_username: number,
    given_name: string,
    family_name: string,
    email: string
}