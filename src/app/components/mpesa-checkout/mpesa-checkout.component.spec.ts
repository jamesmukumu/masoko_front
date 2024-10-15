import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpesaCheckoutComponent } from './mpesa-checkout.component';

describe('MpesaCheckoutComponent', () => {
  let component: MpesaCheckoutComponent;
  let fixture: ComponentFixture<MpesaCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpesaCheckoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MpesaCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
