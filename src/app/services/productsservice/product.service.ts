import { Injectable } from '@angular/core';
import { ApiService } from '../apiservice/api.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private productservice: ApiService) {}

  getProducts() {
    return this.productservice.getProdJson();
  }
}
