import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'createdDate'
})
export class CreatedDatePipe implements PipeTransform {
  transform(date: string): string {
    return date.split('T')[0].split('-').reverse().join('-');
  }
}
