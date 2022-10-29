import { LoginComponent } from './login.component'
import { render, screen } from '@testing-library/angular'
import { LoginService } from '../services/login.service'
import { of } from 'rxjs'
import { SnackBarService } from '@shared/services/snackbar.service'
import { SubmitButtonComponent } from '@shared/components/submit-button/submit-button.component'
import { ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldComponent } from '@shared/components/input-form/mat-form-field.component'
import { EsqueciMinhaSenhaComponent } from '../components/esqueci-minha-senha/esqueci-minha-senha.component'
describe(`LoginComponent`, () => {
  it(`Deve inicializar com os botão de submit desabilitado`, async () => {
    await render(LoginComponent, {
      imports: [ReactiveFormsModule, SubmitButtonComponent, MatFormFieldComponent],
      declarations: [EsqueciMinhaSenhaComponent],
      componentProviders: [
        {
          provide: LoginService,
          useValue: {
            auth() {
              return of()
            }
          }
        },
        {
          provide: SnackBarService,
          useValue: {
            open() {
              return of()
            }
          }
        }
      ]
    })
    // const button = screen.getByT
  })
})

// jest.mock('../services/login.service')
// jest.mock('@shared/services/snackbar.service')
// jest.mock('@angular/router')

// describe('LoginComponent', () => {
//   let component: LoginComponent
//   let fixture: ComponentFixture<LoginComponent>

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [LoginComponent],
//       providers: [LoginService, SnackBarService, Router]
//     })
//       .compileComponents()

//     fixture = TestBed.createComponent(LoginComponent)
//     component = fixture.componentInstance
//     fixture.detectChanges()
//   })

//   it('should create', () => {
//     expect(component).toBeTruthy()
//   })
// })
