import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-summary-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary-cart.component.html',
  styleUrl: './summary-cart.component.css'
})
export class SummaryCartComponent {

  @Input() item: any 
 
}
