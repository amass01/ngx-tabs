import { Component } from '@angular/core';
import { DataService } from '../common/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class AppComponent {

  // array to tabs metadata
  _tabs: any[];

  constructor(private dataService: DataService) {

    dataService.getTabs().subscribe(
      (tabs) => this._tabs = tabs.tabs,
      (err) => console.log(JSON.stringify(err))
    );
  }

  get tabs() {
    return this._tabs;
  }


}
