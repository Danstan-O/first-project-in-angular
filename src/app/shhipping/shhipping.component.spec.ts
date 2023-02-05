import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShhippingComponent } from './shhipping.component';

describe('ShhippingComponent', () => {
  let component: ShhippingComponent;
  let fixture: ComponentFixture<ShhippingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShhippingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShhippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
