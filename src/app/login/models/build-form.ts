import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from '@environments/environment';

interface FormLoginInterface {
  username: FormControl<string | null>;
  password: FormControl<string | null>;
  client_id: FormControl<string | null>;
}

export class FormLoginModel {
  protected form: FormGroup<FormLoginInterface>;

  constructor() {
    this.formBuilder();
  }

  private formBuilder(): void {
    this.form = new FormGroup<FormLoginInterface>({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      client_id: new FormControl(environment.client_id, [Validators.required]),
    });
  }
}
