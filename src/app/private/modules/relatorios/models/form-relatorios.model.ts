import { FormControl, FormGroup } from '@angular/forms'

interface FormRelatoriosInterface {
    data_inicial: FormControl<string | null>
    data_final: FormControl<string | null>
    assunto: FormControl<string | null>
    categoria: FormControl<string | null>,
    bairro: FormControl<string | null>
    status_ocorrencia: FormControl<string | null>
    responsavel: FormControl<string | null>
}

export class FormRelatoriosModel {
    protected form: FormGroup<FormRelatoriosInterface>

    constructor() {
        this.formBuilder()
    }

    private formBuilder(): void {
        this.form = new FormGroup<FormRelatoriosInterface>({
            data_inicial: new FormControl('', []),
            data_final: new FormControl('', []),
            assunto: new FormControl('', []),
            categoria: new FormControl('', []),
            bairro: new FormControl('', []),
            status_ocorrencia: new FormControl('', []),
            responsavel: new FormControl('', []),
        })
    }
}
