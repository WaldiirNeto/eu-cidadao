import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatIconModule } from '@angular/material/icon'
import { ActivatedRoute, Router, RouterModule } from '@angular/router'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { UserModel } from '@shared/models/index'
import { Observable, take } from 'rxjs'
import { CheckPermissionDirective } from '@shared/directives/check-permission.directive'
import { MatMenuModule } from '@angular/material/menu'

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    CommonModule,
    CheckPermissionDirective,
    MatSidenavModule,
    MatExpansionModule,
    MatIconModule,
    RouterModule,
    MatProgressSpinnerModule,
    MatMenuModule
  ],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  @Input() user$: Observable<UserModel>
  protected panelOpenState = false
}
