import { environment } from '@environments/environment'

export default class API_URL {
  static readonly AUTH = `${environment.apiUrl}/Autenticacao/Login`;
  static readonly USER = `${environment.apiUrl}/Usuario`;
  static readonly GET_EMPLOYEES = `${environment.apiUrl}/Usuario/Funcionarios`;
  static readonly GET_CATEGORIAS = `${environment.apiUrl}/CategoriaOcorrencia`;
  static readonly GET_OCORRENCIAS = `${`${environment.apiUrl}/ocorrencia/Consultar`}`
}
