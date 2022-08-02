import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-esqueci-minha-senha',
  templateUrl: './esqueci-minha-senha.component.html',
  styleUrls: ['./esqueci-minha-senha.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(2000, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class EsqueciMinhaSenhaComponent implements OnInit {
  @Output() hiddenFormLogin: EventEmitter<boolean> = new EventEmitter();
  public showForm: boolean = false;
  public loading: boolean;
  public form: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  public emitFormLogin(isShow: boolean): void {
    this.hiddenFormLogin.emit(isShow);
    this.showForm = isShow;
  }
}
