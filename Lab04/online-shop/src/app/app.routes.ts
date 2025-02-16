import { Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details-component/product-details-component.component';
import { ProductComponent } from './product/product.component';
import { HeroComponent } from './hero/hero.component';

export const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
];
