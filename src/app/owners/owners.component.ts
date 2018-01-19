import { Component, OnInit } from '@angular/core';
import { Owner } from '../owner';
import { OwnerService } from '../owner.service';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})
export class OwnersComponent implements OnInit {
  owners: Owner[];

  constructor(private ownerService: OwnerService) { }

  ngOnInit() {
    this.getOwners();
  }

  getOwners(): void {
    this.ownerService.getOwners()
    .subscribe(owners => this.owners = owners);
  }
}
