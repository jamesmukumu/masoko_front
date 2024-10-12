import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnePlusComponent } from './one-plus.component';

describe('OnePlusComponent', () => {
  let component: OnePlusComponent;
  let fixture: ComponentFixture<OnePlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnePlusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnePlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
