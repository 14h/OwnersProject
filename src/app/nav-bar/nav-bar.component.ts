import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  date ="01-02-2018";
  city ="berlin";
  constructor() {

  }


  ngOnInit() {
    // this.date = (<HTMLInputElement>document.getElementById('datepicker')).value;
    // this.city =(<HTMLInputElement>document.getElementById('autocomplete')).value;
this.city ="ssssss";



  }

}
