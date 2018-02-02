import { Component, OnInit } from '@angular/core';
import {} from '@types/googlemaps';
declare var google: any;

@Component({
  selector: 'app-auto-complete-input',
  templateUrl: './auto-complete-input.component.html',
  styleUrls: ['./auto-complete-input.component.css']
})
export class AutoCompleteInputComponent implements OnInit {

    // Google Maps
    bounds: google.maps.LatLngBounds;
    markers: google.maps.Marker[];
    infoWindow: google.maps.InfoWindow;

  constructor() { }

  ngOnInit() {
  }

}
