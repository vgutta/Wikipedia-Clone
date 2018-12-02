import {Pipe, PipeTransform} from '@angular/core';
import { Page } from '../../models/ud-pages';

@Pipe({name: 'trending'}) export class TrendingPipe implements PipeTransform {
  transform(
    values: Page[],
  ) {
    let pagevisits = Object.assign([], values);

    pagevisits.sort((a, b) => {
      //console.log(a);
      return b.pagevisits - a.pagevisits;  

    });
    console.log(pagevisits);
    return pagevisits;

   
  } 
} 