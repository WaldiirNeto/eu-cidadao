import { Injectable } from '@angular/core'
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router'
import { UserService } from '@core/user/user.service'
import { map, Observable } from 'rxjs'
import { PerfilEnum } from 'src/app/shared/enums/perfil.enum'

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanLoad {

  constructor(private readonly _userService: UserService) { }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this._userService.getUser().pipe(map((user) => user.grupo.some(grupo => grupo === PerfilEnum.ADMINISTRADOR)))
  }
}
