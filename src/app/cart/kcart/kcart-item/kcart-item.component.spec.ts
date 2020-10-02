import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KcartItemComponent } from './kcart-item.component';

describe('KcartItemComponent', () => {
  let component: KcartItemComponent;
  let fixture: ComponentFixture<KcartItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KcartItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KcartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
