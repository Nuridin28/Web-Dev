import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { products } from '../../../data/constants';
import { Product } from '../../../types';
import { NgForOf, NgIf } from '@angular/common';
import { ProductFilterService } from '../services/product-filter.service';
import { LikedProductsService } from '../services/liked-products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details-component.component.html',
  imports: [NgForOf, NgIf],
  styleUrls: ['./product-details-component.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productId: number | null = null;
  product: Product | undefined;
  isShareModalOpen = false;
  likedProductService = inject(LikedProductsService);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productFilterService: ProductFilterService,
  ) {}

  ngOnInit() {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = products.find((product) => product.id === this.productId);
  }

  openShareOptions() {
    this.isShareModalOpen = true;
  }

  closeShareOptions() {
    this.isShareModalOpen = false;
  }

  deleteProduct() {
    if (this.product && this.product.id) {
      this.productFilterService.deleteProductById(this.product.id);
      this.router.navigate(['/ProductList']);
    }
  }

  shareToTelegram() {
    if (this.product && this.product.link) {
      const message = encodeURIComponent(
        `Check this out: ${this.product.link}`,
      );
      window.open(
        `https://t.me/share/url?url=${this.product.link}&text=${message}`,
        '_blank',
      );
    } else {
      alert('No link available to share.');
    }
    this.closeShareOptions();
  }

  shareToWhatsApp() {
    if (this.product && this.product.link) {
      const message = encodeURIComponent(
        `Check this out: ${this.product.link}`,
      );
      window.open(`https://api.whatsapp.com/send?text=${message}`, '_blank');
    } else {
      alert('No link available to share.');
    }
    this.closeShareOptions();
  }

  toggleLike() {
    if (!this.product?.isLiked && this.product) {
      this.product.isLiked = true;
      this.product.likes++;
    } else {
      if (this.product) {
        this.product.isLiked = false;
        this.product.likes--;
      }
    }
    this.likedProductService.filterLikedProducts();
  }
}
