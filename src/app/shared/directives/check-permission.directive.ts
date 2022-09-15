import { Directive, Input, OnChanges, TemplateRef, ViewContainerRef } from '@angular/core'
import { TokenService } from '@core/token/token.service'

@Directive({
  selector: '[checkPermission]',
  standalone: true
})
export class CheckPermissionDirective implements OnChanges {

  @Input() checkPermission: string
  constructor(
    private readonly _viewContainerRef: ViewContainerRef,
    private _template: TemplateRef<any>,
    private _tokenService: TokenService) { }

  ngOnChanges(): void {
    const checkIfIsAdmin = this._tokenService.getUserLocal().groups.some(checkAdmin => checkAdmin === `administrador`)
    if (!checkIfIsAdmin) {
      const checkPermission = this._tokenService.getUserLocal().roles.some(role => role === this.checkPermission)
      if (checkPermission) {
        this._viewContainerRef.createEmbeddedView(this._template)
      } else {
        this._viewContainerRef.clear()
      }
    } else {
      this._viewContainerRef.createEmbeddedView(this._template)
    }
  }
}
