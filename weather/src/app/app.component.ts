import { Component } from '@angular/core';
import { searchResults } from './shared/api.models';
import { app_name } from './shared/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = app_name;
  searchCity : searchResults | null = null;
  
  updateSearchResult(newR: searchResults) {
    this.searchCity = newR;
  }
}
