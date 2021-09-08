import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CareerDetailsPageComponent } from './career-details-page/career-details-page.component';
import { CareerPageComponent } from './career-page/career-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { BlobModule } from 'angular-azure-blob-service';
import * as $ from 'jquery';

const myRoutes:Route[] = [
  {
    path:'app',component:AppComponent
  },
  {
    path:'login',component:LoginPageComponent
  },
  {
    path:'career',component:CareerPageComponent
  },
  {
    path:'dashboard',component:DashboardPageComponent
  },
  {
    path:'career-details/:jobType',component:CareerDetailsPageComponent
  },
  {
    path:'**', component:CareerPageComponent 
  }
]

@NgModule({
  declarations: [
    AppComponent,
    CareerDetailsPageComponent,
    CareerPageComponent,
    DashboardPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes),
    FormsModule,
    BlobModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
