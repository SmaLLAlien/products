import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fromArray'
})
export class FromArrayPipe implements PipeTransform {

  transform(value: string[], ...args: unknown[]): unknown {
    return value.reduce((acc, item) => acc += `${item.trim()} `);
  }
}
