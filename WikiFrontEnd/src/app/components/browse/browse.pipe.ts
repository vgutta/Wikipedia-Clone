import { Pipe, PipeTransform } from '@angular/core';
import {Page} from '../../models/ud-pages';

@Pipe({
  name: 'browse'
})
export class BrowsePipe implements PipeTransform {

  transform(pages: Page[], option: string, order:string): any[] {
    console.log("This is order: " +order);
    let pageArr = Object.assign([], pages);
    if(order == "new"){
      pageArr.sort((a,b) => {
        return a.createdDate - b.createdDate;
      });
    }
    else if(order == "views"){
      pageArr.sort((a,b) => {
        return b.pagevisits - a.pagevisits;
      });
    }
    if(!pages) return [];
    if(option == "All" || !option) return pageArr;
  
    option = option.toLowerCase();
    return pageArr.filter( it => {
      console.log(it);
      return it.name[0].toLowerCase() === option;
    });


  }

}
