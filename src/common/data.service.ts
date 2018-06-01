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
      1: {
        content: [{
            name: 'Hund',
            imgUrl: 'assets/img/hund.jpeg',
          }, {
            name: 'Pferd',
            imgUrl: 'assets/img/pferd.jpg',
          }, {
            name: 'Eichhörnchen',
            imgUrl: 'assets/img/squirrel.jpg',
          }, {
            name: 'Schildkröte',
            imgUrl: 'assets/img/turtle.jpg',
          },
        ],
      },
      2: {
        content: [{
            index: 1,
          }, {
            index: 2,
          }, {
            index: 3,
          }, {
            index: 4,
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
