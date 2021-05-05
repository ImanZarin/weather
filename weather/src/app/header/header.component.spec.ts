import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiService } from '../shared/api.service';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let apiServiceMock: any;

  beforeEach(async () => {
    apiServiceMock = jasmine.createSpyObj('ApiService', ['search']);
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [{ provide: ApiService, useValue: apiServiceMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('search button click call searchCity function', () => {
  //   const searchButton: HTMLButtonElement = fixture.debugElement.query(
  //     By.css('button')
  //   ).nativeElement;
  //   searchButton.click();
  //   expect(component.searchCity).toHaveBeenCalledOnceWith();
  // });

  // it('search input enter call search', () => {
  //   const searchInput: HTMLInputElement = fixture.debugElement.query(
  //     By.css('input')
  //   ).nativeElement;
  //   searchInput.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter' }));
  //   expect(component.searchCity).toHaveBeenCalledOnceWith();
  // });

  // it('multiple try on last two test call search once', () => {
  //   const searchButton: HTMLButtonElement = fixture.debugElement.query(
  //     By.css('button')
  //   ).nativeElement;
  //   const searchInput: HTMLInputElement = fixture.debugElement.query(
  //     By.css('input')
  //   ).nativeElement;
  //   searchInput.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter' }));
  //   searchInput.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter' }));
  //   searchButton.click();
  //   searchButton.click();
  //   expect(component.searchCity).toHaveBeenCalledOnceWith();
  // });
});
