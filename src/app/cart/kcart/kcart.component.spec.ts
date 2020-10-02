import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KcartComponent } from './kcart.component';

describe('KcartComponent', () => {
  let component: KcartComponent;
  let fixture: ComponentFixture<KcartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KcartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
