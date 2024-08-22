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

  // product
  @Input() product!: any;

  // quantity of item
  quantity: number = 1;

  // check if item is in cart
  isAdded: boolean = false;

  

  // check if item is in cart
  ngOnInit() {
    this.checkItemInCart();
    this.afterReload();
    this.cartItems.totalprice();
  }
  // checks if item is in cart after reload
  afterReload() {
    this.cartItems.cart.forEach((item: any) => {
      if (item.name === this.product.name) {
        this.isAdded = true;
      }
    })
  }

  // checks if item is still in cart
  checkItemInCart() {
    this.cartItems.getCart().subscribe((cartItems: any[]) => {
      this.isAdded = cartItems.some(
        (item: any) => item.name === this.product.name
      );
    });
  }

  // add to cart
  addToCart(name: string, price: number, quantity: number, img: string) {
    if (this.isAdded) return;
    this.cartItems.addToCart(name, price, quantity, img);
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
