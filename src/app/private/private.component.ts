import { isPlatformBrowser } from '@angular/common'
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { UserService } from '@core/user/user.service'
import { UserModel } from '@shared/models/user.model'
import { Observable, shareReplay } from 'rxjs'

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {

  protected user$: Observable<UserModel>
  protected panelOpenState = false

  constructor(private _userService: UserService, private _router: Router, private _route: ActivatedRoute, @Inject(PLATFORM_ID) private _platformId: object) { }

  ngOnInit(): void {
    const { redirectAfterRender = '' } = this._route.snapshot.data
    if (redirectAfterRender && isPlatformBrowser(this._platformId)) {
      this._router.navigate([redirectAfterRender])
    }
    this.user$ = this._userService.getUser().pipe(shareReplay())
  }

}
