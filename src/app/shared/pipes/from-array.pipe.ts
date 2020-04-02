import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fromArray'
})
export class FromArrayPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value.reduce((acc, item) => acc += `${item.trim()} `);
  }
}
