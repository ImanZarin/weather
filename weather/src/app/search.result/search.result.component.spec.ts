import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Search.ResultComponent } from './search.result.component';

describe('Search.ResultComponent', () => {
  let component: Search.ResultComponent;
  let fixture: ComponentFixture<Search.ResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Search.ResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Search.ResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
