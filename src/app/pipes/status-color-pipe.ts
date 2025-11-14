import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusColor',
  standalone: true, // Importante: pipe standalone
})
export class StatusColorPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return 'medium';
    }

    switch (value.toLowerCase()) {
      case 'alive':
        return 'success';
      case 'dead':
        return 'danger';
      case 'unknown':
        return 'warning';
      default:
        return 'medium';
    }
  }
}