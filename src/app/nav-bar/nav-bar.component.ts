import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

    // $('.datepicker').pickadate({
    //   selectMonths: true, // Creates a dropdown to control month
    //   selectYears: 15, // Creates a dropdown of 15 years to control year,
    //   today: 'Today',
    //   clear: 'Clear',
    //   close: 'Ok',
    //   closeOnSelect: false // Close upon selecting a date,
    // });
    // $('.datepicker').pickadate({
    //    selectMonths: true, // Creates a dropdown to control month
    //    selectYears: 15, // Creates a dropdown of 15 years to control year,
    //    today: 'Today',
    //    clear: 'Clear',
    //    close: 'Ok',
    //    closeOnSelect: false // Close upon selecting a date,
    //  });


  }

}
