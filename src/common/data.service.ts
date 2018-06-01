import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getTabs(): Observable<any> {
    return of({
      tabs: [
        {
          name: 'tab1',
        },
        {
          name: 'tab2',
        },
        {
          name: 'tab3',
        },
      ],
    });
  }

  getRandomIndex(): number {
    return (new Date()).getTime() % 3;
  }
}
