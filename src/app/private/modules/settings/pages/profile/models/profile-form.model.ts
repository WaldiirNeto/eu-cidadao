import { FormControl, FormGroup, Validators } from '@angular/forms'

interface FormProfileInterface {
    id: FormControl<string | null>
    celular: FormControl<string | null>
    cpf: FormControl<string | null>
    email: FormControl<string | null>
    dataNascimento: FormControl<string | null>
    nomeCompleto: FormControl<string | null>,
    senhaAtual: FormControl<string | null>,
    novaSenha: FormControl<string | null>,

}

export class FormProfileModel {
    protected form: FormGroup<FormProfileInterface>

    constructor() {
        this.formBuilder()
    }

    private formBuilder(): void {
        this.form = new FormGroup<FormProfileInterface>({
            id: new FormControl('', [Validators.required]),
            celular: new FormControl('', [Validators.required]),
            cpf: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
            dataNascimento: new FormControl('', [Validators.required]),
            nomeCompleto: new FormControl('', [Validators.required]),
            senhaAtual: new FormControl('', []),
            novaSenha: new FormControl('', [Validators.required])


        })
    }
}
