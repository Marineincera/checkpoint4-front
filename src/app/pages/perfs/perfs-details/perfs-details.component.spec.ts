import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfsDetailsComponent } from './perfs-details.component';

describe('PerfsDetailsComponent', () => {
  let component: PerfsDetailsComponent;
  let fixture: ComponentFixture<PerfsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
