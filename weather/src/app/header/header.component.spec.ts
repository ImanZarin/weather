import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Key } from 'selenium-webdriver';
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
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('search button click call search', () => {
    const searchButton: HTMLButtonElement = fixture.debugElement.query(
      By.css('button')
    ).nativeElement;
    searchButton.click();
    expect(apiServiceMock.search).toHaveBeenCalledOnceWith('');
  });

  it('search input enter call search', () => {
    const searchInput: HTMLInputElement = fixture.debugElement.query(
      By.css('input')
    ).nativeElement;
    searchInput.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter' }));
    expect(apiServiceMock.search).toHaveBeenCalledOnceWith('');
  });

  it('multiple try on last to test call search once', () => {
    const searchButton: HTMLButtonElement = fixture.debugElement.query(
      By.css('button')
    ).nativeElement;
    const searchInput: HTMLInputElement = fixture.debugElement.query(
      By.css('input')
    ).nativeElement;
    searchInput.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter' }));
    searchInput.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter' }));
    searchButton.click();
    searchButton.click();
    expect(apiServiceMock.search).toHaveBeenCalledOnceWith('');
  });
});
