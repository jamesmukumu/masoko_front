import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingularDeviceComponent } from './singular-device.component';

describe('SingularDeviceComponent', () => {
  let component: SingularDeviceComponent;
  let fixture: ComponentFixture<SingularDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingularDeviceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingularDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
