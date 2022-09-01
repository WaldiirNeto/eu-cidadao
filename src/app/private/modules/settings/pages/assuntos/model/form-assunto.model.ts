import { FormControl, FormGroup, Validators } from '@angular/forms'
import { SubCategoriaCreateModel } from './assunto.model'


interface FormcreateAssuntoInterface {
    nome: FormControl<string | null>,
    descricao: FormControl<string | null>,
    ativo: FormControl<boolean | null>,
    caminhoImagemMenu: FormControl<string | null>,
    caminhoImagemTela: FormControl<string | null>,
    categorias: FormControl<string | null>
    subCategoriasOcorrencias: FormControl<SubCategoriaCreateModel[] | null>
}

export class FormAssuntoModel {
    protected form: FormGroup<FormcreateAssuntoInterface>
    constructor() {
        this.formBuilder()
    }

    private formBuilder(): void {
        this.form = new FormGroup<FormcreateAssuntoInterface>({
            nome: new FormControl('', [Validators.required]),
            descricao: new FormControl('', [Validators.required]),
            ativo: new FormControl(true, [Validators.required]),
            caminhoImagemMenu: new FormControl('', [Validators.required]),
            caminhoImagemTela: new FormControl('', [Validators.required]),
            categorias: new FormControl('', []),
            subCategoriasOcorrencias: new FormControl(null, [Validators.required]),
        })
    }
}
