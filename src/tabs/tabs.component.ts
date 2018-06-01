import { Component } from '@angular/core';
import { DataService } from '../common/data.service';
import { merge } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class AppComponent {

  // array of tabs metadata
  _tabs: any[];
  _tabsContent: any;
  _defaultTab: number;

  constructor(private dataService: DataService) {

    this._defaultTab = dataService.getRandomIndex();

    dataService.getTabs()
    .subscribe(
      (tabs) => {
          this._tabs = tabs.tabs;
          dataService.getTabsContent()
          .subscribe(
            (tabsContent) => {
              this._tabsContent = tabsContent;
            },
            (err) => console.log(JSON.stringify(err))
          );
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

  get tabsContent() {
    return this._tabsContent;
  }

  onSelect($event) {
    this._defaultTab = $event.index;
  }
}
