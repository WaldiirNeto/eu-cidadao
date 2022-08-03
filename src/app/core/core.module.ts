import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { TokenService } from './token/token.service'
import { HttpPrivateClientService } from './http/http-private-client.service'
import { HttpPublicClientService } from './http/http-public-client.service'
import { UserService } from './user/user.service'

@NgModule({
    imports: [HttpClientModule],
    exports: [HttpClientModule],
    providers: [HttpPublicClientService, HttpPrivateClientService, TokenService, UserService],
})
export class CoreModule { }
