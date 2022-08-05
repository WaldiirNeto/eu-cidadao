import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop'
import { Component, Inject, OnInit } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Assunto } from '../../model/assunto.model'
import { FormAssuntoModel } from '../../model/form-assunto.model'

@Component({
  selector: 'app-modal-create-assunto',
  templateUrl: './modal-create-assunto.component.html',
  styleUrls: ['./modal-create-assunto.component.scss']
})
export class ModalCreateAssuntoComponent extends FormAssuntoModel implements OnInit {
  protected loading: boolean
  listLeft: Array<string> = []

  listRight: Array<string> = [];

  constructor(@Inject(MAT_DIALOG_DATA) public assunto: Assunto) {
    super()
  }

  ngOnInit(): void {
    this.form.patchValue(this.assunto)
  }

  public populateListLeft(): void {
    const categoria = this.form.controls.categorias.value as string
    this.listLeft.push(categoria)
  }

  public removeItemList(item: string, type: string): void {
    if (type === 'right') {
      this.listLeft.push(item)
      this.listRight = this.listRight.filter(categoria => categoria !== item)
    } else {
      this.listLeft = this.listLeft.filter(categoria => categoria !== item)
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      )
    }
  }

}
