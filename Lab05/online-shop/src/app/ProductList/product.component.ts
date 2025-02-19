import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { Router } from '@angular/router';
import { FilterListComponent } from '../filter-list/filter-list.component';
import { Product } from '../../../types';
import { ProductFilterService } from '../services/product-filter.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgForOf, FilterListComponent],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductListComponent {
  filteredProducts: Product[] = [];

  constructor(
    private router: Router,
    private productFilterService: ProductFilterService,
  ) {}

  ngOnInit() {
    this.productFilterService.filteredProducts$.subscribe(
      (products: Product[]) => {
        this.filteredProducts = products;
      },
    );
  }

  openProduct(product: Product) {
    this.router.navigate(['/ProductList', product.id]);
  }
}
