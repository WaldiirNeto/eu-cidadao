import { environment } from '@environments/environment'

export default class API_URL {
  static readonly AUTH = `${environment.apiUrl}/Autenticacao/Login`;
  static readonly GET_USER = `${environment.apiUrl}/Usuario`;

}
