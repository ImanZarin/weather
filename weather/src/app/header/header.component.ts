import { HttpResponse } from '@angular/common/http';
import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { searchResults } from '../shared/api.models';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {}

  @Output() onChange = new EventEmitter<searchResults>();

  searchCity(cityInput: Event) {
    this.api
      .search((<HTMLInputElement>cityInput.target).value)
      .subscribe((resp) => {
        console.log(resp);
        if (resp.count === 1)
          this.router.navigate([
            '/',
            resp.list[0].coord.lat,
            resp.list[0].coord.lon,
          ]);
        else this.onChange.emit(resp);
      });
  }
}
