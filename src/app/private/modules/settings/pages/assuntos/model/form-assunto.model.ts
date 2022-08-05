import { FormControl, FormGroup, Validators } from '@angular/forms'

interface FormAssuntoInterface {
    assunto: FormControl<string | null>
    responsavel_area: FormControl<string | null>
    email: FormControl<string | null>,
    telefone: FormControl<string | null>
    imagem: FormControl<string | null>
    categorias: FormControl<string | null>
}

export class FormAssuntoModel {
    protected form: FormGroup<FormAssuntoInterface>
    constructor() {
        this.formBuilder()
    }

    private formBuilder(): void {
        this.form = new FormGroup<FormAssuntoInterface>({
            assunto: new FormControl('', [Validators.required]),
            responsavel_area: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
            telefone: new FormControl('', [Validators.required]),
            imagem: new FormControl('', [Validators.required]),
            categorias: new FormControl('', []),

        })
    }
}
