import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePers',
})
export class DatePersPipe implements PipeTransform {
  transform(value: any): string {
    if (!value) return '';

    const date = new Date(value);
    const jour = date.getDate().toString().padStart(2, '0');
    const mois = (date.getMonth() + 1).toString().padStart(2, '0');
    const annee = date.getFullYear();

    return `${jour}/${mois}/${annee}`;
  }
}
