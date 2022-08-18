import { FormControl, FormGroup } from '@angular/forms'

export interface FormFilterOcorrenciasInterface {

    protocolo: FormControl<string | null>,
    assunto: FormControl<string | null>,
    categoria: FormControl<string | null>,
    responsavel: FormControl<string | null>,
    bairro: FormControl<string | null>,
    data_criacao: FormControl<string | null>,
    status: FormControl<string | null>
}

export class FormFilterOcorrenciasModel {
    protected form: FormGroup<FormFilterOcorrenciasInterface>

    constructor() {
        this.formBuilder()
    }

    private formBuilder(): void {
        this.form = new FormGroup<FormFilterOcorrenciasInterface>({
            protocolo: new FormControl(''),
            assunto: new FormControl(''),
            categoria: new FormControl(''),
            responsavel: new FormControl(''),
            bairro: new FormControl(''),
            data_criacao: new FormControl(''),
            status: new FormControl('')
        })
    }
}

