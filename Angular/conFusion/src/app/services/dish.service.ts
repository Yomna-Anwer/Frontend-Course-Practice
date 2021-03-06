import { Injectable } from '@angular/core';
import { promise } from 'protractor';
import {Dish} from '../shared/dish';
import {DISHES} from '../shared/dishes';
import {  Observable,of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes():  Observable <Dish[]>{
    
      // Simulate server latency with 2 second delay
      return of(DISHES).pipe(delay(2000));
    
  }


  getDish(id:string): Observable <Dish>{
    //the filtering of an array will help me to select out only those elements from the array that 
    //match a particular criteria that will be specified inside the filter here and then among them 
    //It will return only the first one
    return of(DISHES.filter((dish) => (dish.id === id))[0]).pipe(delay(2000));

  }

  getFeaturedDish(): Observable <Dish>{
    return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000));


  }

  getDishIds(): Observable<string[] | any> {
    return of(DISHES.map(dish => dish.id ));
  }
}
