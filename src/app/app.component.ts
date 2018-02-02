import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import {} from '@types/googlemaps';
// declare var jquery:any;
// declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OwnersProject';
  constructor(db: AngularFirestore) {

  }
}
