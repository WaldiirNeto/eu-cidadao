import { FormControl, FormGroup } from '@angular/forms'

interface FormRelatoriosInterface {
    data_inicial: FormControl<string | null>
    data_final: FormControl<string | null>
    CategoriaId: FormControl<string | null>
    SubCategoriaId: FormControl<string | null>,
    bairro: FormControl<string | null>
    SituacaoId: FormControl<string | null>
    UsuarioDespachanteId: FormControl<string | null>,
    tipoRelatorio: FormControl<string | null>
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
            CategoriaId: new FormControl('', []),
            SubCategoriaId: new FormControl('', []),
            bairro: new FormControl('', []),
            SituacaoId: new FormControl('', []),
            UsuarioDespachanteId: new FormControl('', []),
            tipoRelatorio: new FormControl('', []),
        })
    }
}
