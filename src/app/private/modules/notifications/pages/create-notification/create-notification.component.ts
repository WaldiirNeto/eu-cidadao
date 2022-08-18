import { Component, OnInit } from '@angular/core'
import { FormCreateNotificationModel } from '../../models/form-create-notification.model'

@Component({
  selector: 'app-create-notification',
  templateUrl: './create-notification.component.html',
  styleUrls: ['./create-notification.component.scss']
})
export class CreateNotificationComponent extends FormCreateNotificationModel implements OnInit {

  constructor() {
    super()
  }

  ngOnInit(): void {
  }

}
