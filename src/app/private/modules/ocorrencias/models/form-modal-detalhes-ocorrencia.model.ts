import { FormControl, FormGroup } from '@angular/forms'


interface DocumentosModel {
    id: FormControl<number>,
    arquivo: FormControl<string | null>,
    extensao: FormControl<string | null>,
    ativo: FormControl<boolean | null>
}
interface EnderecoModel {
    enderecoId: FormControl<number | null>,
    placeId: FormControl<string | null>,
    referencia: FormControl<string | null>
}
export interface FormModalDetalhesInterface {

    id: FormControl<number | null>,
    enderecoId: FormControl<number | null>,
    titulo: FormControl<string | null>,
    comentarioCidadao: FormControl<string | null>,
    comentarioGestor: FormControl<string | null>,
    despachado: FormControl<boolean | null>,
    cidadaoId: FormControl<string | null>,
    ativo: FormControl<boolean | null>,
    usuarioDespachanteId: FormControl<string | null>,
    subCategoriaOcorrenciaId: FormControl<number | null>,
    documentos: FormControl<Array<DocumentosModel> | null>,
    localizacao: FormControl<EnderecoModel | null>
    situacaoId: FormControl<number | null>,
    CategoriaId: FormControl<number | null>
}

export class FormModalDetalhesModel {
    protected form: FormGroup<FormModalDetalhesInterface>

    constructor() {
        this.formBuilder()
    }

    private formBuilder(): void {
        this.form = new FormGroup<FormModalDetalhesInterface>({
            id: new FormControl(),
            enderecoId: new FormControl(),
            titulo: new FormControl(),
            comentarioCidadao: new FormControl(),
            comentarioGestor: new FormControl(),
            despachado: new FormControl(true),
            cidadaoId: new FormControl(),
            ativo: new FormControl(true),
            usuarioDespachanteId: new FormControl(),
            subCategoriaOcorrenciaId: new FormControl(),
            documentos: new FormControl(),
            localizacao: new FormControl(),
            situacaoId: new FormControl(),
            CategoriaId: new FormControl()
        })
    }
}