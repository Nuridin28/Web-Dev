import { Routes } from '@angular/router';
import { ProductDetailsComponent } from './Product/product-details-component.component';
import { ProductListComponent } from './ProductList/product.component';
import { HeroComponent } from './Hero/hero.component';
import { LikedProductsComponent } from './liked-products/liked-products.component';

export const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'ProductList', component: ProductListComponent },
  { path: 'ProductList/:id', component: ProductDetailsComponent },
  { path: 'LikedProduct', component: LikedProductsComponent },
];
