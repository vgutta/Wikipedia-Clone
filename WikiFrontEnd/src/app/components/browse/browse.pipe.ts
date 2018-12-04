import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'browse'
})
export class BrowsePipe implements PipeTransform {

  transform(pages: any[], option: string): any[] {
    console.log(pages);
    console.log(option);
    if(!pages) return [];
    if(option == "All" || !option) return pages;
  
    option = option.toLowerCase();
    return pages.filter( it => {
      console.log(it);
      return it.name[0].toLowerCase() === option;
    });


  }

}
