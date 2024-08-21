import { Component } from '@angular/core';
import { CartItemsService } from '../services/cartItems/cart-items.service';
import { ItemsInCartComponent } from '../items-in-cart/items-in-cart.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ItemsInCartComponent,CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  constructor(public cartItems: CartItemsService) {}

  removeItem(item: string) {
    this.cartItems.removeitem(item);
  }



}
