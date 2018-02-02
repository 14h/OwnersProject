import { Component, OnInit } from '@angular/core';
import { Owner } from '../owner';
import { OwnerService } from '../owner.service';

import { PRODUCTS } from '../mock-products';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  products = PRODUCTS;
  owners: Owner[] = [];


  constructor(private ownerService: OwnerService) { }

  ngOnInit() {
    // this.getOwners();

  }

  getOwners(): void {
    this.ownerService.getOwners()
      .subscribe(owners => this.owners = owners.slice(1, 5));
  }
}
