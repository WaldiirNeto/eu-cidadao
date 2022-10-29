import { AbstractControl } from '@angular/forms'

export function passwordValidator(control: AbstractControl): { [key: string]: unknown } | null {
    const novaSenha = control.parent?.get(`novaSenha`)?.value
    if (novaSenha) {
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
        return null
    }
}