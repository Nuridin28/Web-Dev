import { Injectable } from '@angular/core';
import { products } from '../../../data/constants';

@Injectable({
  providedIn: 'root',
})
export class LikedProductsService {
  products = products;

  likedProducts = products.filter((product) => product.isLiked);

  filterLikedProducts() {
    this.likedProducts = this.products.filter((product) => product.isLiked);
  }

  constructor() {}
}
