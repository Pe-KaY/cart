import { Component, Output, EventEmitter } from '@angular/core';
import { CartItemsService } from '../services/cartItems/cart-items.service';
import { ItemsInCartComponent } from '../items-in-cart/items-in-cart.component';
import { SummaryCartComponent } from '../summary-cart/summary-cart.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ItemsInCartComponent, SummaryCartComponent, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  constructor(public cartItems: CartItemsService) {}

  removeItem(item: string) {
    this.cartItems.removeitem(item);
  }

  // emitters
  @Output() modalOpened = new EventEmitter<boolean>();
  @Output() modalClosed = new EventEmitter<boolean>();

  // checks if window object is defined
  isWindow: boolean = typeof window !== 'undefined';

  // checks if modal is open after refresh
  modalOpen: boolean = this.isWindow
    ? JSON.parse(localStorage.getItem('modalOpen') || 'false')
    : false;

  // modal functions
  openModal() {
    this.modalOpen = true;
    this.modalOpened.emit(this.modalOpen);
    localStorage.setItem('modalOpen', JSON.stringify(this.modalOpen));
  }

  closeModal() {
    this.modalOpen = false;
    this.cartItems.clearCart();
    this.modalClosed.emit(this.modalOpen);
    localStorage.removeItem('modalOpen');
  }
}
