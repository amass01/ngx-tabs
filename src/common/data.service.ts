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
          name: 'TOPICS',
          icon: 'favorite',
        },
        {
          name: 'ARCHIVES',
          icon: 'archive',
        },
        {
          name: 'PAGES',
          icon: 'pages',
        },
      ],
    });
  }

  /**
   * Return random integer in the range [0..2] - randon default tab index
   */
  getRandomIndex(): number {
    return (new Date()).getTime() % 3;
  }
}
