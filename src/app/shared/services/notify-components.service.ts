import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { NotificationEnum } from '../enums/notification.enum'

@Injectable({
  providedIn: 'root'
})
export class NotifyComponentsService {

  private _notify$: BehaviorSubject<{ type: NotificationEnum, values?: any }> = new BehaviorSubject({ type: NotificationEnum }) as any

  public setNotification(typeNotification: NotificationEnum, data?: any): void {
    this._notify$.next({ type: typeNotification, values: data })
  }

  public observeNotification(): Observable<{ type: NotificationEnum, values?: any }> {
    return this._notify$.asObservable()
  }
}
