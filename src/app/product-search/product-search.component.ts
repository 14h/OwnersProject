import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PRODUCTS } from '../mock-products';



@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {
  city = this.route.snapshot.paramMap.get('city');
  date = this.route.snapshot.paramMap.get('date');
  products = PRODUCTS;


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // this.products = this.products.filter(e => e.city === this.city);
    this.city = this.route.snapshot.paramMap.get('city');
    this.date = this.route.snapshot.paramMap.get('date');
  }

}
