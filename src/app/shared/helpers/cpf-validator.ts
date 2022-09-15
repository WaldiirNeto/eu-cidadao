import { AbstractControl } from '@angular/forms'

export function isValidCPF(control: AbstractControl): { [key: string]: any } | null {
    const cpf: string = control.value.replace(/[^\d]+/g, '')
    if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) {
        return {
            cpfInvalid: true
        }
    }

    const cpfs = cpf.split('').map(el => +el)
    const rest = (count: number) => (cpfs.slice(0, count - 12).reduce((soma, el, index) => (soma + el * (count - index)), 0) * 10) % 11 % 10
    const checkCpfValid = rest(10) === cpfs[9] && rest(11) === cpfs[10]
    if (checkCpfValid) {
        return null
    } else {
        return {
            cpfInvalid: true
        }
    }
}