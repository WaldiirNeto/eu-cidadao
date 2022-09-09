import { Component, OnInit } from '@angular/core'
import { BoxComponent } from '../box/box.component'

@Component({
  selector: 'app-without-permission',
  standalone: true,
  imports: [BoxComponent],
  templateUrl: './without-permission.component.html',
  styleUrls: ['./without-permission.component.scss']
})
export class WithoutPermissionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
