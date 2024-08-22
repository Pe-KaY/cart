import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartItemsService {
  private cartUpdate = new BehaviorSubject<any[]>([]);

  cart: any[] = [];
  total: number = 0;

  //  updates the cart total price
  totalprice() {
    this.total = 0;
    this.cart.forEach((item) => {
      this.total += item.price * item.quantity;
    });
  }

  // adds items to the cart
  addToCart(name: string, price: number, quantity: number = 1, img: string) {
    this.cart = [...this.cart, { name, price, quantity, img }];
    this.totalprice();
  }

  // return observable of the cart whenever it changes
  getCart(): Observable<any> {
    return this.cartUpdate.asObservable();
  }

  // increases the quantity of an item
  addQuantity(name: string) {
    this.cart = this.cart.map((item) => {
      if (item.name === name) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    this.totalprice();
  }

  // reduces the quantity of an item
  reduceQuantity(name: string) {
    this.cart = this.cart.map((item) => {
      if (item.name === name && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    this.totalprice();
  }

  // removes an item from the cart
  removeitem(name: string) {
    this.cart = this.cart.filter((item) => item.name !== name);
    this.totalprice();
    this.cartUpdate.next(this.cart);
  }

  // clears the cart
  clearCart() {
    this.cart = [];
    this.totalprice();
    this.cartUpdate.next(this.cart);
  }
}
