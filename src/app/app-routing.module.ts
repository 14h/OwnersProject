import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { OwnersComponent }      from './owners/owners.component';
import { OwnerDetailComponent }  from './owner-detail/owner-detail.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductSearchComponent} from './product-search/product-search.component'

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: ProductDetailComponent },
  { path: 'search/:date/:city', component: ProductSearchComponent },
  { path: 'owners', component: OwnersComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
