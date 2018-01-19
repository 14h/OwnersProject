import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


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




@NgModule({
  declarations: [
    AppComponent,
    OwnersComponent,
    OwnerDetailComponent,
    DashboardComponent,
    NavBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ OwnerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
