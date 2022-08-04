import { Component, OnInit } from '@angular/core'
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
  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.user$ = this._userService.getUser().pipe(shareReplay())
  }

}
