import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Pipe({
  name: 'controlError'
})
export class ControlErrorPipe implements PipeTransform {
  transform(control: AbstractControl, value: string): string {
    console.log('cehcekcS', value);
    let nameArr: any;
    if (control.touched) {
      const parent = control.parent;
      if (parent instanceof FormGroup && control.errors) {
        let controlName: string;

        const controls = parent.controls;
        if (!nameArr) {
          nameArr = Object.keys(controls);
        }

        for (const name of nameArr) {
          if (control === controls[name]) {
            controlName = name;
            break;
          }
        }
        const translatedControlName = this.controlNameAdjustSwitch(controlName);
        return this.setErrorString(control, controlName, translatedControlName);
      }
    }
  }
  controlNameAdjustSwitch(controlName: string): string {
    switch (controlName) {
      case 'name':
        controlName = 'imię';
        break;
      case 'surname':
      case 'lastName':
        controlName = 'nazwisko';
        break;
      case 'phoneNum':
        controlName = 'numer telefonu';
        break;
      case 'companyName':
        controlName = 'nazwa firmy';
        break;
      case 'password':
        controlName = 'hasło';
        break;
      case 'oldPassword':
        controlName = 'stare hasło';
        break;
      case 'newPassword':
        controlName = 'nowe hasło';
        break;
      case 'email':
        controlName = 'email';
        break;
      case 'course':
        controlName = 'kurs';
        break;
      case 'typeOfStudy':
        controlName = 'typ studiów';
        break;
      case 'dateOfCompletion':
        controlName = 'data zakończenia';
        break;
    }
    return controlName;
  }
  setErrorString(
    control: AbstractControl,
    controlName: string,
    translatedControlName: string
  ): string {
    let errorStr: string;
    if (control.value !== undefined && control.value.length === 0) {
      errorStr = 'Wpisz ' + translatedControlName;
    } else {
      switch (controlName) {
        case 'password':
        case 'newPassword':
          errorStr =
            'Użyj co najmniej ośmiu znaków, w tym jednocześnie liter, cyfr i symboli: !#$%&?';
          break;
        case 'passwordConfirm':
          errorStr = 'Hasła nie pasują do siebie';
          break;
        default:
          errorStr = translatedControlName;
          break;
      }
    }
    return errorStr;
  }
}
