import { AbstractControl, Validators } from '@angular/forms'

export function passwordValidator(control: AbstractControl): { [key: string]: any } | null {

    const novaSenha = control.parent?.get(`novaSenha`)?.value
    console.log(novaSenha)
    if (novaSenha) {
        console.log(`existe senha`)
        if (novaSenha === control.value) {
            console.log(`senhas são iguais`)

            return null
        }
        else {
            console.log(`senhas nao são iguais`)
            return {
                passwordNotEqual: true
            }
        }
    } else {
        console.log(`nova senha sem valores`)
        return null
    }
}