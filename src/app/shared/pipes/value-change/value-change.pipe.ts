import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Pipe({
  name: 'valueChange'
})
export class ValueChangePipe implements PipeTransform {
  transform(control: AbstractControl): Observable<any> {
    return control.valueChanges.pipe(startWith(control.value));
  }
}
