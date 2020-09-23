import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingGistsComponent } from './listing-gists.component';

describe('ListingGistsComponent', () => {
  let component: ListingGistsComponent;
  let fixture: ComponentFixture<ListingGistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingGistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingGistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
