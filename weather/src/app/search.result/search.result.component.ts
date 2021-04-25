import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { searchResult, searchResults } from '../shared/api.models';

@Component({
  selector: 'app-search-result',
  templateUrl: './search.result.component.html',
  styleUrls: ['./search.result.component.scss']
})
export class SearchResultComponent implements OnInit {
  @Input()
  resultCities!: searchResults | null;

 
  constructor() { }

  ngOnInit(): void {
  }

}
