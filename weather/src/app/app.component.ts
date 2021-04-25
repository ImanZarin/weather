import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { searchResult, searchResults } from './shared/api.models';
import { app_name } from './shared/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = app_name;
  searchCity: searchResults | null = null;

  constructor(private router: Router) {}

  updateSearchResult(newR: searchResults) {
    this.searchCity = newR;
  }

}
