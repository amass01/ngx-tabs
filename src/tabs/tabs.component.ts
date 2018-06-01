import { Component } from '@angular/core';
import { DataService } from '../common/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class AppComponent {

  // array of tabs metadata
  _tabs: any[];
  _defaultTab: number;

  constructor(private dataService: DataService) {

    dataService.getTabs().subscribe(
      (tabs) => {
        this._tabs = tabs.tabs;
        this._defaultTab = 1;
      },
      (err) => console.log(JSON.stringify(err))
    );
  }

  get tabs() {
    return this._tabs;
  }

  get defaultTab() {
    return this._defaultTab;
  }


}
