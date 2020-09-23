import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGistsComponent } from './delete-gists.component';

describe('DeleteGistsComponent', () => {
  let component: DeleteGistsComponent;
  let fixture: ComponentFixture<DeleteGistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteGistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteGistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
