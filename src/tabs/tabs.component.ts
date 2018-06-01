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

    this._defaultTab = dataService.getRandomIndex();
    dataService.getTabs().subscribe(
      (tabs) => {
        this._tabs = tabs.tabs;
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

  onSelect($event) {
    this._defaultTab = $event.index;
  }
}
