import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ApiService } from '../shared/api.service';
import { SearchResultComponent } from './search.result.component';

describe('SearchResultComponent', () => {
  let component: SearchResultComponent;
  let fixture: ComponentFixture<SearchResultComponent>;
  let apiServiceMock: any;

  beforeEach(async () => {
    apiServiceMock = jasmine.createSpyObj('ApiService', ['search': ]);
    const activatedRouteMock = {
      queryParams: of({ search: 'london' }),
    };
    await TestBed.configureTestingModule({
      declarations: [SearchResultComponent],
      imports: [RouterTestingModule, MatSnackBarModule],
      providers: [
        { provide: ApiService, useValue: apiServiceMock },
        { provide: ActivatedRoute, useValue: activatedRouteMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call search api', () => {
    expect(apiServiceMock.search).toHaveBeenCalledOnceWith('london');
  });
});
