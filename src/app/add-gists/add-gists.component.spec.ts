import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGistsComponent } from './add-gists.component';

describe('AddGistsComponent', () => {
  let component: AddGistsComponent;
  let fixture: ComponentFixture<AddGistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
