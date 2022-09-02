import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CoreModule } from '@core/core.module'
import { SnackBarService } from '@shared/services/snackbar.service'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule
  ],
  bootstrap: [AppComponent],
  providers: [SnackBarService]
})
export class AppModule { }
