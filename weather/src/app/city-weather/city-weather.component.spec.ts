import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiService } from '../shared/api.service';

import { CityWeatherComponent } from './city-weather.component';

describe('CityWeatherComponent', () => {
  let component: CityWeatherComponent;
  let fixture: ComponentFixture<CityWeatherComponent>;
  let apiServiceMock: any;

  beforeEach(async () => {
    apiServiceMock = jasmine.createSpyObj('ApiService', ['getWeather']);
    await TestBed.configureTestingModule({
      declarations: [CityWeatherComponent],
      imports: [RouterTestingModule],
      providers: [{ provide: ApiService, useValue: apiServiceMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
