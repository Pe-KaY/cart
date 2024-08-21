import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemsService } from '../services/cartItems/cart-items.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  constructor(public cartItems: CartItemsService) {}

  @Input() product!: any;

  quantity: number = 1;

  isAdded: boolean = false

  // check if item is in cart
  ngOnInit() {
    this.isAdded = this.cartItems.cart.some(
      (item: any) => item.name === this.product.name
    )
      ? true
      : false;

      
  }

  // checks if item is still in cart
  
  // add to cart
  addToCart(name: string, price: number) {
    if(this.isAdded) return
    this.cartItems.addToCart(name, price);
    this.isAdded = this.cartItems.cart.some(
      (item: any) => item.name === this.product.name
    )
      ? true
      : false;
  }

  // increase Quantity
  increaseQuantity() {
    this.cartItems.addQuantity(this.product.name);
    this.quantity++;
  }

  // decreaseQuantity
  decreaseQuantity() {
    if (this.quantity <= 1) return;
    this.cartItems.reduceQuantity(this.product.name);
    this.quantity--;
  }
}
