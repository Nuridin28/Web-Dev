import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../../../data/constants';
import { Product } from '../../../types';
import { NgForOf, NgIf } from '@angular/common';

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

  constructor(private route: ActivatedRoute) {}

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
}
