import {AbstractControl, ValidatorFn} from '@angular/forms';

export function priceNumber(): ValidatorFn {
  return (c: AbstractControl): { [key: string]: boolean } | null => {
    if (c.value !== null && (isNaN(c.value) || isNaN(+c.value))) {
      return { price: true };
    }
    return null;
  };
}
