import { Component, OnInit, Input } from '@angular/core';
import { Owner } from '../owner';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {OwnerService }  from '../owner.service';

@Component({
  selector: 'app-owner-detail',
  templateUrl: './owner-detail.component.html',
  styleUrls: ['./owner-detail.component.css']
})
export class OwnerDetailComponent implements OnInit {
  @Input() owner: Owner;
  constructor(
    private route: ActivatedRoute,
    private ownerServie: OwnerService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getOwner();
  }

  getOwner(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.ownerServie.getOwner(id)
    .subscribe(owner => this.owner = owner);
  }
  save(): void {
   this.ownerServie.updateOwner(this.owner)
     .subscribe();
 }

}
