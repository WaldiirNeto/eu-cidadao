import { FormControl, FormGroup } from '@angular/forms'

export interface FormFilterOcorrenciasInterface {

    id: FormControl<string | null>,
    CategoriaId: FormControl<string | null>,
    SubCategoriaId: FormControl<string | null>,
    UsuarioDespachanteId: FormControl<string | null>,
    SituacaoId: FormControl<string | null>
}

export class FormFilterOcorrenciasModel {
    protected form: FormGroup<FormFilterOcorrenciasInterface>

    constructor() {
        this.formBuilder()
    }

    private formBuilder(): void {
        this.form = new FormGroup<FormFilterOcorrenciasInterface>({
            id: new FormControl(''),
            SubCategoriaId: new FormControl(''),
            CategoriaId: new FormControl(''),
            UsuarioDespachanteId: new FormControl(''),
            SituacaoId: new FormControl('')
        })
    }
}

