import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sentenceCase'
})
export class SentenceCasePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (!value) {
      return null;
    }

    return value.split(' ').map(word => word[0].toUpperCase() + word.substr(1)).join(' ');
  }

}
