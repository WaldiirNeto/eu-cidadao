import { FormControl, FormGroup, Validators } from '@angular/forms'

interface FormCreateNotificationInterface {
    titulo: FormControl<string | null>
    assunto: FormControl<string | null>
    categoria: FormControl<string | null>
    criticidade: FormControl<string | null>,
    cidade: FormControl<string | null>
    link: FormControl<string | null>
    posicao_notificacao: FormControl<string | null>
}

export class FormCreateNotificationModel {
    protected form: FormGroup<FormCreateNotificationInterface>

    constructor() {
        this.formBuilder()
    }

    private formBuilder(): void {
        this.form = new FormGroup<FormCreateNotificationInterface>({
            titulo: new FormControl('', [Validators.required]),
            assunto: new FormControl('', [Validators.required]),
            categoria: new FormControl('', [Validators.required]),
            criticidade: new FormControl('', [Validators.required]),
            cidade: new FormControl('', [Validators.required, Validators.email]),
            link: new FormControl('', [Validators.required]),
            posicao_notificacao: new FormControl('', [Validators.required])
        })
    }
}
