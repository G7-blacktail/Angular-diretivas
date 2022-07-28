import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService{

  constructor() { }

  getPeople(): Observable<any> {
    let peopleArray = [
      {
        firstName: 'Ivolanda',
        lastName: 'SBT',
        age: 1000000
      },
      {
        firstName: 'Catatal',
        lastName: 'Bear',
        age: 26
      },
      {
        firstName: 'Maria',
        lastName: 'Francisca',
        age: 18
      },
      {
        firstName: 'Joãozinho',
        lastName: 'Miqueias',
        age: 38
      }
    ]

    return of(peopleArray);
  }
}
