import { environment } from '@environments/environment'

export default class API_URL {
  static readonly AUTH = `${environment.apiUrl}/Autenticacao/Login`;
  static readonly USER = `${environment.apiUrl}/Usuario`;
  static readonly GET_EMPLOYEES = `${environment.apiUrl}/Usuario/Funcionarios`;
  static readonly CATEGORIAS = `${environment.apiUrl}/CategoriaOcorrencia`;
  static readonly CATEGORIA_ID = (id: number) => `${environment.apiUrl}/CategoriaOcorrencia/${id}`
  static readonly ALTERAR_OCORRENCIA = `${environment.apiUrl}/Ocorrencia/AlterarSituacao`;
  static readonly OCORRENCIA = `${environment.apiUrl}/Ocorrencia`;
  static readonly GET_OCORRENCIAS = `${`${environment.apiUrl}/ocorrencia/Consultar`}`
  static readonly GET_SITUACAO = `${environment.apiUrl}/Situacao`
  static readonly GET_CITYS = `${environment.apiUrl}/Cidade`
  static readonly NOTIFICATIONS = `${environment.apiUrl}/Notificacao`


}
