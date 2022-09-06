import { Injectable } from '@angular/core'
import { HttpPrivateClientService } from '@core/http/http-private-client.service'
import API_URL from '@helpers/api-router.helper'
import { UrlParams } from '@helpers/url-search-params.helper'
import { Observable } from 'rxjs'
import { NotificationListModel, NotificationModel } from '../models/notification.model'

@Injectable()
export class NotificationsService {

  constructor(private readonly _http: HttpPrivateClientService) { }

  public getListNotifications(filter?: any): Observable<NotificationListModel> {
    const params = UrlParams(filter)
    return this._http.get<NotificationListModel>(API_URL.NOTIFICATIONS + params)
  }

  public publishNotification(payload: NotificationModel): Observable<boolean> {
    return this._http.post<boolean>(API_URL.NOTIFICATIONS, payload)
  }

  public deleteNotification(id: number): Observable<void> {
    return this._http.delete<void>(API_URL.NOTIFICATION_ID(id))

  }
}
