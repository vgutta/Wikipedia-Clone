import {Pipe, PipeTransform} from '@angular/core';
import { Page } from '../../models/ud-pages';

@Pipe({name: 'trending'}) export class TrendingPipe implements PipeTransform {
  transform(
    values: Page[],
  ) {
    let pagevisits = Object.assign([], values);

    pagevisits.sort((a, b) => {
      return b.pagevisits - a.pagevisits;  

    });
    return pagevisits;

   
  } 
} 