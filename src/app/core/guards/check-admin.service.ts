import { Injectable } from '@angular/core'
import { CanMatch } from '@angular/router'
import { UserService } from '@core/user/user.service'
import { map } from 'rxjs'
import { PerfilEnum } from 'src/app/shared/enums/perfil.enum'

@Injectable({ providedIn: 'root' })
export class CanMatchAdmin implements CanMatch {
  constructor(private readonly _userService: UserService) { }

  canMatch() {
    return this._userService.getUser().pipe(map((user) => user.grupo.some(grupo => grupo === PerfilEnum.ADMINISTRADOR)))
  }
}