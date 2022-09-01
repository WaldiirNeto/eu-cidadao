import { FormControl, FormGroup, Validators } from '@angular/forms'
import { isValidCPF } from '@helpers/cpf-validator'

interface FormProfileInterface {
    id: FormControl<string | null>
    firstName: FormControl<string | null>
    lastName: FormControl<string | null>
    email: FormControl<string | null>
    cpf: FormControl<string | null>
    dataDeNascimento: FormControl<string | null>
    cidadeId: FormControl<number | null>
    senha: FormControl<string | null>
    celular: FormControl<string | null>
    cidadaoId: FormControl<string | null>
    senhaAtual: FormControl<string | null>,
    novaSenha: FormControl<string | null>,
    foto: FormControl<string | null>
}

export class FormProfileModel {
    protected form: FormGroup<FormProfileInterface>

    constructor() {
        this.formBuilder()
    }

    private formBuilder(): void {
        this.form = new FormGroup<FormProfileInterface>({
            id: new FormControl('', [Validators.required]),
            firstName: new FormControl('', [Validators.required]),
            lastName: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
            cpf: new FormControl('', [Validators.required, isValidCPF]),
            dataDeNascimento: new FormControl('', [Validators.required]),
            cidadeId: new FormControl(null, [Validators.required]),
            senha: new FormControl(''),
            celular: new FormControl('', [Validators.required]),
            cidadaoId: new FormControl('', [Validators.required]),
            senhaAtual: new FormControl(''),
            novaSenha: new FormControl(''),
            foto: new FormControl('')
        })
    }
}
