import { Injectable } from '@angular/core';
import { BehaviorSubject ,Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartItemsService {

  private cartUpdate = new BehaviorSubject<any[]>([]);

  cart: any[] = [];
  total: number = 0

  totalprice() {
    this.total = 0
    this.cart.forEach(item => {
      this.total += item.price * item.quantity
    })
  }

  addToCart(name:string, price:number, quantity:number = 1) {
    this.cart = [...this.cart, {name, price, quantity}];
    this.totalprice()
  }

  // return observable of the cart whenever it changes
  getCart(): Observable<any> {
    return this.cartUpdate.asObservable();
  }
  
  addQuantity(name:string) {
    this.cart = this.cart.map(item => {
      if (item.name === name) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    this.totalprice()
  }

  reduceQuantity(name:string) {
    this.cart = this.cart.map(item => {
      if (item.name === name && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    this.totalprice()
  }

  removeitem(name:string) {
    this.cart = this.cart.filter(item => item.name !== name);
    this.totalprice()
    this.cartUpdate.next(this.cart)
  }

}
