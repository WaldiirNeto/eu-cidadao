import { FormControl, FormGroup, Validators } from '@angular/forms'
import { isValidCPF } from '@helpers/cpf-validator'

interface FormEmployeesInterface {
    id?: FormControl<string | null>,
    firstName: FormControl<string | null>,
    lastName: FormControl<string | null>,
    email: FormControl<string | null>,
    cpf: FormControl<string | null>,
    dataDeNascimento: FormControl<string | null>,
    cidadeId: FormControl<number | null>,
    senha: FormControl<string | null>,
    celular: FormControl<string | null>,

    // cidadaoId: FormControl<string | null>
    // nome: FormControl<string | null>
    // data_nascimento: FormControl<string | null>
    // cpf: FormControl<string | null>,
    // email: FormControl<string | null>
    // telefone: FormControl<string | null>
    // endereco: FormControl<string | null>
    // senha: FormControl<string | null>
    // foto: FormControl<string | null>
}

export class FormEmployeesModel {
    protected form: FormGroup<FormEmployeesInterface>

    constructor() {
        this.formBuilder()
    }

    private formBuilder(): void {
        this.form = new FormGroup<FormEmployeesInterface>({
            id: new FormControl(''),
            firstName: new FormControl('', [Validators.required]),
            lastName: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
            cpf: new FormControl('', [Validators.required, isValidCPF]),
            dataDeNascimento: new FormControl('', [Validators.required]),
            cidadeId: new FormControl(0, [Validators.required]),
            senha: new FormControl('', [Validators.required]),
            celular: new FormControl('', [Validators.required])
        })
    }
}
