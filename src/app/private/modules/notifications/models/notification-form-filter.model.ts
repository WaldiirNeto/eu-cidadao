import { FormControl, FormGroup } from '@angular/forms'

interface NotificationFormFilterInterface {
    Titulo: FormControl<string | null>
    CidadeId: FormControl<number | null>
    CategoriaId: FormControl<number | null>
    Nome: FormControl<string | null>,
    Descricao: FormControl<string | null>
    Situacao: FormControl<string | null>
}

export class NotificationFormFilterModel {
    protected form: FormGroup<NotificationFormFilterInterface>

    constructor() {
        this.formBuilder()
    }

    private formBuilder(): void {
        this.form = new FormGroup<NotificationFormFilterInterface>({
            Titulo: new FormControl(''),
            CidadeId: new FormControl(),
            CategoriaId: new FormControl(),
            Nome: new FormControl(),
            Descricao: new FormControl(),
            Situacao: new FormControl()
        })
    }
}