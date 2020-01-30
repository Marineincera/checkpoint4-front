import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationPerfComponent } from './creation-perf.component';

describe('CreationPerfComponent', () => {
  let component: CreationPerfComponent;
  let fixture: ComponentFixture<CreationPerfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationPerfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationPerfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
