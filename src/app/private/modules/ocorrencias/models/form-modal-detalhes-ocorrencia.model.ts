import { FormControl, FormGroup } from '@angular/forms'

export interface FormModalDetalhesInterface {

    CategoriaId: FormControl<number | null>,
    SubCategoriaId: FormControl<number | null>,
    comentario: FormControl<string | null>
}

export class FormModalDetalhesModel {
    protected form: FormGroup<FormModalDetalhesInterface>

    constructor() {
        this.formBuilder()
    }

    private formBuilder(): void {
        this.form = new FormGroup<FormModalDetalhesInterface>({
            CategoriaId: new FormControl(),
            SubCategoriaId: new FormControl(),
            comentario: new FormControl('')
        })
    }
}