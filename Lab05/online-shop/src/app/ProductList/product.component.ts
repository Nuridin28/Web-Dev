import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { FilterListComponent } from '../filter-list/filter-list.component';
import { Product } from '../../../types';
import { ProductFilterService } from '../services/product-filter.service';
import { LikedProductsService } from '../services/liked-products.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgForOf, FilterListComponent],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductListComponent {
  filteredProducts: Product[] = [];
  likedProducts: Product[] = [];
  showLikedProducts = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productFilterService: ProductFilterService,
    private likedProductsService: LikedProductsService,
  ) {}

  ngOnInit() {
    this.route.url.subscribe((segments) => {
      this.showLikedProducts = segments.some(
        (segment) => segment.path === 'LikedProduct',
      );

      if (this.showLikedProducts) {
        this.likedProducts = this.likedProductsService.likedProducts;
      } else {
        this.productFilterService.filteredProducts$.subscribe(
          (products: Product[]) => {
            this.filteredProducts = products;
          },
        );
      }
    });
  }

  openProduct(product: Product) {
    this.router.navigate(['/ProductList', product.id]);
  }
}
