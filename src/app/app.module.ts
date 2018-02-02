import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

//added imports for Firebase
// AngularFirestoreModule
// AngularFireAuthModule
// AngularFireDatabaseModule
// AngularFireStorageModule (Future release)
// AngularFireMessagingModule (Future release)
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { OwnersComponent } from './owners/owners.component';
import { OwnerDetailComponent } from './owner-detail/owner-detail.component';
import{OwnerService} from './owner.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component'

// import {Http} from '@angular/http';

// import { HttpClientModule } from '@angular/common/http'
import {HttpClientModule} from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';


import * as $ from 'jquery';


import { AgmCoreModule } from '@agm/core';
import { AutoCompleteInputComponent } from './auto-complete-input/auto-complete-input.component';
import {} from '@types/googlemaps';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductSearchComponent } from './product-search/product-search.component';






@NgModule({
  declarations: [
    AppComponent,
    OwnersComponent,
    OwnerDetailComponent,
    DashboardComponent,
    NavBarComponent,
    FooterComponent,
    AutoCompleteInputComponent,
    ProductDetailComponent,
    ProductSearchComponent,

  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBYxC5WNsRZXDBFqBawfzkPWGmGIhWJf9I",
      libraries: ["places"]
    }),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase, 'cook4me'),  // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    //ReactiveFormsModule, //just added it to check if it solves gapp

  ],
  providers: [ OwnerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
