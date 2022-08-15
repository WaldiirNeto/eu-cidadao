import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-relatorios-manager',
  templateUrl: './relatorios-manager.component.html',
  styleUrls: ['./relatorios-manager.component.scss']
})
export class RelatoriosManagerComponent implements OnInit {

  protected form: FormGroup
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      date_inicial: new FormControl(''),
      date_final: new FormControl('')
    })
  }

}
