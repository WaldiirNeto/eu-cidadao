import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { TokenService } from './token/token.service'
import { HttpPrivateClientService } from './http/http-private-client.service'
import { HttpPublicClientService } from './http/http-public-client.service'
import { UserService } from './user/user.service'
import { UnauthorizeInterceptor } from './interception/interceptor.interceptor'

@NgModule({
    imports: [HttpClientModule],
    exports: [HttpClientModule],
    providers: [HttpPublicClientService, HttpPrivateClientService, TokenService, UserService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: UnauthorizeInterceptor,
            multi: true
        }],
})
export class CoreModule { }
