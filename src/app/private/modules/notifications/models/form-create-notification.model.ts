import { FormControl, FormGroup, Validators } from '@angular/forms'

interface FormCreateNotificationInterface {
    titulo: FormControl<string | null>
    categoriaId: FormControl<string | null>
    criticidade: FormControl<string | null>,
    cidadeId: FormControl<string | null>
    link: FormControl<string | null>,
    corBackground: FormControl<string | null>,
    descricao: FormControl<string | null>,
    corTexto: FormControl<string | null>,

}

export class FormCreateNotificationModel {
    protected form: FormGroup<FormCreateNotificationInterface>

    constructor() {
        this.formBuilder()
    }

    private formBuilder(): void {
        this.form = new FormGroup<FormCreateNotificationInterface>({
            titulo: new FormControl('', [Validators.required]),
            categoriaId: new FormControl('', [Validators.required]),
            criticidade: new FormControl('', [Validators.required]),
            cidadeId: new FormControl('', [Validators.required]),
            link: new FormControl('', [Validators.required]),
            corBackground: new FormControl('', [Validators.required]),
            descricao: new FormControl('', [Validators.required]),
            corTexto: new FormControl('', [Validators.required])
        })
    }
}
