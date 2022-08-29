import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'criticidade'
})
export class CriticidadePipe implements PipeTransform {

  transform(value: string): string {
    return {
      1: `Baixa`,
      2: `Média`,
      3: `Alta`,
      4: `Urgente`
    }[value] as string
  }

}
