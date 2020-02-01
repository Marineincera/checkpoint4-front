import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationPlaceComponent } from './creation-place.component';

describe('CreationPlaceComponent', () => {
  let component: CreationPlaceComponent;
  let fixture: ComponentFixture<CreationPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
