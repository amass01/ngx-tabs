import { Component } from '@angular/core';
import { DataService } from '../common/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class AppComponent {

  // array to tabs metadata
  tabs: any[];

  constructor(private dataService: DataService) { }


}
