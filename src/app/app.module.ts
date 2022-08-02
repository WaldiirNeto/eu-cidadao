import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpPublicClientService } from './core/http/http-public-client.service'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule],
  providers: [HttpPublicClientService],
  bootstrap: [AppComponent],
})
export class AppModule { }
