import {
  ComponentFixture,
  inject,
  TestBed,
  TestBedStatic,
} from '@angular/core/testing';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ApiService } from '../shared/api.service';
import { SearchResultComponent } from './search.result.component';

describe('SearchResultComponent', () => {
  let component: SearchResultComponent;
  let fixture: ComponentFixture<SearchResultComponent>;
  let apiServiceMock: any;
  let testBed: TestBedStatic;

  beforeEach(async () => {
    apiServiceMock = jasmine.createSpyObj('ApiService', ['search']);
    const activatedRouteMock = {
      queryParams: of({ search: 'london' }),
    };
    testBed = TestBed.configureTestingModule({
      declarations: [SearchResultComponent],
      imports: [
        RouterTestingModule,
        MatSnackBarModule,
        BrowserAnimationsModule,
      ],
      providers: [
        { provide: ApiService, useValue: apiServiceMock },
        { provide: ActivatedRoute, useValue: activatedRouteMock },
      ],
    });
  });

  const prepare = () => {
    fixture = TestBed.createComponent(SearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  };

  it('should call search api', async () => {
    apiServiceMock.search.and.returnValue(of({ message: '', cod: '', count: 0, list: [] }));
    await testBed.compileComponents();
    prepare();
    expect(apiServiceMock.search).toHaveBeenCalledOnceWith('london');
  });

  it('should open snackbar if the result list is empty', async () => {
    apiServiceMock.search.and.returnValue(
      of({ message: '', cod: '', count: 0, list: [] })
    );
    await testBed.compileComponents();
    prepare();
    fixture.detectChanges();
    const snack = fixture.debugElement.query(By.css('.snackbar'));
    expect(snack).toBeDefined();
  });

  it('should fill list in html', async () => {
    apiServiceMock.search.and.returnValue(
      of({
        message: '',
        cod: '',
        count: 2,
        list: [
          {
            name: 'london',
            coord: { lat: 12.12, lon: 13.13 },
            sys: { country: 'GB' },
          },
          {
            name: 'london',
            coord: { lat: -14.14, lon: -15.15 },
            sys: { country: 'US' },
          },
        ],
      })
    );
    await testBed.compileComponents();
    prepare();
    fixture.detectChanges();
    const li = fixture.debugElement.queryAll(By.css('.list-row'));
    expect(li.length).toBe(2);
  });
});
