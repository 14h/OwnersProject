import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { PRODUCTS } from '../mock-products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  products = PRODUCTS;
  @Input() product: Product;
   id = +this.route.snapshot.paramMap.get('id');
  constructor(private route: ActivatedRoute) {
 }

  ngOnInit() {
    this.getProduct(this.id);
  }
  getProduct(id): void {
    this.product = this.products[id-1]
  }

}
