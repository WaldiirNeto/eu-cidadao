import { Injectable } from '@angular/core'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http'
import { Observable, tap } from 'rxjs'
import { Router } from '@angular/router'

@Injectable()
export class UnauthorizeInterceptor implements HttpInterceptor {

  constructor(private _router: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap(({
        error: (error: HttpErrorResponse) => {
          if (error.status === 401 || error.status === 0) {
            localStorage.removeItem('token')
            this._router.navigate(['login'])
          }
        }

      }))
    )
  }
}
