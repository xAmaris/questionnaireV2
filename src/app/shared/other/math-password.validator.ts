import { AbstractControl } from '@angular/forms';

export const matchPassword = (
  control: AbstractControl
): { [s: string]: boolean } => {
  // check if inputs have same values
  if (control.parent !== undefined) {
    const password = control.parent.get('password').value;
    const passwordConfirm = control.parent.get('passwordConfirm').value;
    if (password !== passwordConfirm) {
      return { noMatch: true };
    }
  }
};
