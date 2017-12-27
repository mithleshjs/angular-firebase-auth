import { AbstractControl, ValidatorFn, FormControl } from '@angular/forms';

export function confirmValidator(confirmControl: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const field = control.value;
      if (field) {
        const confirmField = control.root.get(confirmControl).value;
        if (field === confirmField) {
          return null;
        }
      }
      return { confirm: true };
    };
}
