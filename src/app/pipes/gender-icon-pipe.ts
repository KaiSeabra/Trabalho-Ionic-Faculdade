import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderIcon',
  standalone: true, // Importante: pipe standalone
})
export class GenderIconPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return 'help-outline';
    }

    switch (value.toLowerCase()) {
      case 'male':
        return 'male-outline';
      case 'female':
        return 'female-outline';
      case 'genderless':
        return 'transgender-outline';
      default:
        return 'help-outline';
    }
  }
}