import { Component, inject } from '@angular/core';
import { LikedProductsService } from '../services/liked-products.service';
import { ProductListComponent } from '../ProductList/product.component';

@Component({
  selector: 'app-liked-products',
  imports: [ProductListComponent],
  templateUrl: './liked-products.component.html',
  styleUrl: './liked-products.component.scss',
})
export class LikedProductsComponent {
  likedProduct = inject(LikedProductsService);
  products = this.likedProduct.likedProducts;
}
