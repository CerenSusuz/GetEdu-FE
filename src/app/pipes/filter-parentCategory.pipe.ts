import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '../models/category';

@Pipe({
  name: 'filterParentCategory'
})

export class FilterParentCategory implements PipeTransform{
  transform(value: Category[], filterText: string): Category[] {
      filterText = filterText
      ? filterText.toLocaleLowerCase()
      : "";

      return filterText
      ? value.filter((c:Category)=>c.name.toLocaleLowerCase().indexOf(filterText)!==-1)
      : value;

  }
}
