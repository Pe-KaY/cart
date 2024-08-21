import { Component } from '@angular/core';
import { Input,Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-items-in-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './items-in-cart.component.html',
  styleUrl: './items-in-cart.component.css'
})
export class ItemsInCartComponent {

  @Input() cartItem: any;
  @Output () remove = new EventEmitter<string>();

  removeItem() {
    this.remove.emit(this.cartItem.name);
  }

}
