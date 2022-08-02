import { Injectable } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({ providedIn: 'root' })
export class SnackBarService {
  constructor(private readonly _snackBar: MatSnackBar) { }

  open(message: string, type: 'error' | 'success' | 'info'): void {
    this._snackBar.open(message, 'X', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: `snack-${type}`
    })
  }
}