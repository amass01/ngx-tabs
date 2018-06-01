import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  /**
  * Returns tabs content
  */
  getTabsContent(): Observable<any> {
    return of({
      0: {
        content: [{
            title: 'HTML Techniques',
            posts: 56,
          }, {
            title: 'CSS Styling',
            posts: 34,
          }, {
            title: 'Flash Toturials',
            posts: 12,
          }, {
            title: 'Web Miscellanea',
            posts: 9,
          }, {
            title: 'Site News',
            posts: 6,
          }, {
            title: 'Web Development',
            posts: 2,
          },
        ],
      },
    });
  }
  /**
   * Returns tabs mateda
   */
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
