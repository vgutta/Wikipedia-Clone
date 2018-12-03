import {Pipe, PipeTransform} from '@angular/core';
import { Page } from '../../models/ud-pages';
//import { ConsoleReporter } from 'jasmine';

@Pipe({name: 'trending'}) export class TrendingPipe {
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