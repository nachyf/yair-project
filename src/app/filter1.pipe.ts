import { Pipe, PipeTransform } from '@angular/core';
import {Restaurant} from './models/restaurant.model';

@Pipe({
  name: 'filter1'
})
export class Filter1Pipe implements PipeTransform {

 transform(value: any, input: string) {
        if (input) {
            input = input.toLowerCase();
            return value.filter(function (el: any) {
                return el.restType.toLowerCase().indexOf(input) > -1;
            })
        }
        return value;
    }
}