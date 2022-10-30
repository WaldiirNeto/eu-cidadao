import { FormControl, FormGroup, Validators } from '@angular/forms'
import { QuestoesPlebiscitoModel } from './plebiscito.model'

interface FormPlebiscitoInterface {
    id: FormControl<number | null>,
    nome: FormControl<string | null>,
    descricao: FormControl<string | null>,
    link: FormControl<string | null>,
    ativo: FormControl<boolean | null>,
    dataEncerramento: FormControl<string | null>,
    categoriaId: FormControl<number | null>,
    subCategoriaId: FormControl<number | null>
    questoesPlebiscito: FormControl<QuestoesPlebiscitoModel[] | null>
}

export class FormPlebiscitoModel {
    protected form: FormGroup<FormPlebiscitoInterface>

    constructor() {
        this.formBuilder()
    }

    private formBuilder(): void {
        this.form = new FormGroup<FormPlebiscitoInterface>({
            id: new FormControl(null, [Validators.required]),
            nome: new FormControl('', [Validators.required]),
            descricao: new FormControl('', [Validators.required]),
            link: new FormControl('', [Validators.required]),
            ativo: new FormControl(null, [Validators.required]),
            dataEncerramento: new FormControl('', [Validators.required]),
            categoriaId: new FormControl(null, [Validators.required]),
            subCategoriaId: new FormControl(null, [Validators.required]),
            questoesPlebiscito: new FormControl(null, [Validators.required])
        })
    }
}