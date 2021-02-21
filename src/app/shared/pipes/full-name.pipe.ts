import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {
  transform({
    firstName,
    lastName
  }: {
    firstName: string;
    lastName: string;
  }): string {
    return `${lastName}, ${firstName}`;
  }
}
