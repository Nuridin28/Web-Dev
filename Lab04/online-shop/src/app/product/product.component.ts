import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { products } from '../../../data/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [NgForOf],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  products = products;

  constructor(private router: Router) {}

  openProduct(product: any) {
    this.router.navigate(['/product', product.id]);
  }
}
