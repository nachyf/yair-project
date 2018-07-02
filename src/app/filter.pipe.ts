import { Pipe, PipeTransform } from '@angular/core';
import {Restaurant} from './models/restaurant.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

 transform(value: any, input: string) {
        if (input) {
            input = input.toLowerCase();
            return value.filter(function (el: any) {
                return el.restName.toLowerCase().indexOf(input) > -1;
            })
        }
        return value;
    }
}