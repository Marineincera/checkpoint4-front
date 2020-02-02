import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUpdatePricesComponent } from './modal-update-prices.component';

describe('ModalUpdatePricesComponent', () => {
  let component: ModalUpdatePricesComponent;
  let fixture: ComponentFixture<ModalUpdatePricesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalUpdatePricesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalUpdatePricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
