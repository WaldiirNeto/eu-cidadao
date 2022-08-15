import { NgModule } from '@angular/core'
import { NgxMaskModule } from 'ngx-mask'

@NgModule({
    imports: [
        NgxMaskModule.forRoot()],
    exports: [NgxMaskModule],
    providers: [],
})
export class SharedModule { }
