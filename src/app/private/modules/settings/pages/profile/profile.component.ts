import { Component, OnDestroy, OnInit } from '@angular/core'
import { UserService } from '@core/user/user.service'
import { UserModel } from '@shared/models/user.model'
import { Subject, takeUntil } from 'rxjs'
import { FormProfileModel } from '../../models/profile-form.model'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent extends FormProfileModel implements OnInit, OnDestroy {

  private _destroy$ = new Subject()
  constructor(private _userService: UserService) {
    super()
  }


  ngOnInit(): void {
    this._userService.getUser()
      .pipe(takeUntil(this._destroy$))
      .subscribe((userData: UserModel) => {
        console.log(userData)
      })
  }

  ngOnDestroy(): void {
    this._destroy$.next(null)
    this._destroy$.complete()
  }

}
