import { FormControl, FormGroup, Validators } from '@angular/forms'
import { isValidCPF } from '@helpers/cpf-validator'

interface FormEmployeesInterface {
    nome: FormControl<string | null>
    data_nascimento: FormControl<string | null>
    cpf: FormControl<string | null>,
    email: FormControl<string | null>
    telefone: FormControl<string | null>
    endereco: FormControl<string | null>
    senha: FormControl<string | null>
    foto: FormControl<File | null>
}

export class FormEmployeesModel {
    protected form: FormGroup<FormEmployeesInterface>

    constructor() {
        this.formBuilder()
    }

    private formBuilder(): void {
        this.form = new FormGroup<FormEmployeesInterface>({
            nome: new FormControl('', [Validators.required]),
            data_nascimento: new FormControl('', [Validators.required]),
            cpf: new FormControl('', [Validators.required, isValidCPF]),
            email: new FormControl('', [Validators.required, Validators.email]),
            telefone: new FormControl('', [Validators.required]),
            endereco: new FormControl('', [Validators.required]),
            senha: new FormControl('', [Validators.required]),
            foto: new FormControl(null, [Validators.required]),
        })
    }
}
