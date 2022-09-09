import { NgModule } from '@angular/core'
import { MatPaginatorIntl } from '@angular/material/paginator'
import { BrowserModule } from '@angular/platform-browser'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CoreModule } from '@core/core.module'
import { getptBRPaginatorIntl } from '@helpers/pagination.helper'
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
  providers: [SnackBarService,
    {
      provide: MatPaginatorIntl,
      useValue: getptBRPaginatorIntl()
    }
  ]
})
export class AppModule { }
