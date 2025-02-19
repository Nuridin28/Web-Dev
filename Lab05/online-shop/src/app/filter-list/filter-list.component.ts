import { Component } from '@angular/core';
import { filterList } from '../../../data/constants';
import { ProductFilterService } from '../services/product-filter.service';
import { Product } from '../../../types';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrl: './filter-list.component.scss',
})
export class FilterListComponent {
  protected readonly filterList = filterList;
  private allProducts: Product[] = [];

  constructor(private productFilterService: ProductFilterService) {
    this.productFilterService.allProducts$.subscribe((products) => {
      this.allProducts = products;
    });
  }

  selectFilter(category: string) {
    const filtered = this.allProducts.filter(
      (product) => product.category === category,
    );
    this.productFilterService.setFilteredProducts(filtered);
  }
}
