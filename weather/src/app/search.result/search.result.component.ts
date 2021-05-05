import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchResult, SearchResults } from '../shared/api.models';
import { ApiService } from '../shared/api.service';
import { MyStrings } from '../shared/constants';
import { MyParams, MyRoute } from '../shared/enums';

@Component({
  selector: 'app-search-result',
  templateUrl: './search.result.component.html',
  styleUrls: ['./search.result.component.scss'],
})
export class SearchResultComponent implements OnInit {
  searchWord!: string;
  resultCities!: SearchResults | null;
  isLoading: boolean = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.activatedRoute.queryParams.subscribe((params) => {
      this.searchWord = params['search'];
      this.api.search(this.searchWord).subscribe((resp) => {
        if (resp.count === 0) {
          this.resultCities = null;
          this.isLoading = false;
          this.snackBar.open(MyStrings.search_list_empty_error, undefined, {
            duration: 2000,
            panelClass: ['snackbar'],
          });
        } else if (resp.count === 1) {
          this.isLoading = false;
          this.router.navigate([MyRoute.weather], {
            queryParams: {
              lat: resp.list[0].coord.lat,
              lon: resp.list[0].coord.lon,
            },
          });
        } else {
          this.resultCities = resp;
          this.isLoading = false;
        }
      });
    });
  }
}
