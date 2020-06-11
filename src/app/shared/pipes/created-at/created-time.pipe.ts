import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'createdTime'
})
export class CreatedTimePipe implements PipeTransform {
  transform(date: string): string {
    return date.split('T')[1].split('.')[0];
  }
}
