import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGistsComponent } from './edit-gists.component';

describe('EditGistsComponent', () => {
  let component: EditGistsComponent;
  let fixture: ComponentFixture<EditGistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
