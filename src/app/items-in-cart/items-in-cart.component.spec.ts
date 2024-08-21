import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsInCartComponent } from './items-in-cart.component';

describe('ItemsInCartComponent', () => {
  let component: ItemsInCartComponent;
  let fixture: ComponentFixture<ItemsInCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemsInCartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemsInCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
