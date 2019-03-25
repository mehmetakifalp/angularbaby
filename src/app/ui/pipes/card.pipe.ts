import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name:'cardPipe'
})
export class CardPipe implements PipeTransform{
  transform(value, extension: string='Default Extension'){
    return (value) + extension;
  }
}