import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductService } from './services/productsservice/product.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CartComponent, ProductCardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private productservice: ProductService) {}

  ngOnInit() {
    this.products$ = this.productservice.getProducts();
  }

  products$!: Observable<any>;

  // checks if window object is defined to access local storage
  isWindow: boolean = typeof window !== 'undefined';

  // prevents scroll when modal is opened
  modalOpen: boolean = this.isWindow
    ? localStorage.getItem('modalOpen') === 'true'
    : false;

  storeModal() {
    if (this.modalOpen) {
      localStorage.setItem('modalOpen', JSON.stringify(this.modalOpen));
      return;
    }
    localStorage.removeItem('modalOpen');
  }

  // modal opened
  modal(check: boolean) {
    if (check) {
      this.modalOpen = true;
      this.storeModal();
      return;
    }
    this.storeModal();
    this.modalOpen = false;
  }
}
