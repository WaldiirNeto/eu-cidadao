import { Component, OnInit } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  standalone: true,
  imports: [MatIconModule],
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
