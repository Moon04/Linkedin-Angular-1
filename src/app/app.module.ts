import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { LandingPageComponent } from './features/landing-page/landing-page.component';
import { NavlogoComponent } from './core/navlogo/navlogo.component';
import { HeaderComponent } from './core/header/header.component';
import { LoginComponent } from './core/login/login.component';
import { Regform1Component } from './core/regform1/regform1.component';
import { Regform2Component } from './core/regform2/regform2.component';
import { Regform3Component } from './core/regform3/regform3.component';
import { Regform4Component } from './core/regform4/regform4.component';
import { Regform5Component } from './core/regform5/regform5.component';
import { FooterComponent } from './core/footer/footer.component';
import { FootersignComponent } from './core/regform1/footersign/footersign.component';
import { AddprofilepicComponent } from './features/addprofilepic/addprofilepic.component';
import { UsersService } from './_services/users.service';
import { Error } from "./_services/errors";
import { ErrorpageComponent } from './core/errorpage/errorpage.component';
import { FontAwesomeModule } from "../../node_modules/@fortawesome/angular-fontawesome";
import { AppRoutingModule } from "./app-routing.module";
import { HomePageComponent } from "./home-page/home-page.component";
import { AccountPeakComponent } from "./home-page/account-peak/account-peak.component";
import { HomeConnectorsComponent } from "./home-page/home-connectors/home-connectors.component";
import { HomeConnectorsCardsComponent } from "./home-page/home-connectors/home-connectors-cards/home-connectors-cards.component";
import { PostsComponent } from "./home-page/posts/posts.component";
import { TagsComponent } from "./home-page/tags/tags.component";
import { PostCardsComponent } from "./home-page/posts/post-cards/post-cards.component";
import { HomePageHeaderComponent } from './homepageheader/homepageheader.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingPageComponent,
    FooterComponent,
    HeaderComponent,
    Regform1Component,
    Regform2Component,
    Regform3Component,
    NavlogoComponent,
    FootersignComponent,
    Regform4Component,
    Regform5Component,
    AddprofilepicComponent,
    ErrorpageComponent,
    HomePageComponent,
    AccountPeakComponent,
    HomeConnectorsComponent,
    HomeConnectorsCardsComponent,
    PostsComponent,
    TagsComponent,
    PostCardsComponent,
    HomePageHeaderComponent
  ],
  imports: [
    FontAwesomeModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([

      { path: '', redirectTo: 'landing', pathMatch: 'full' },
      { path: 'landing', component: LandingPageComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: Regform1Component },
      { path: 'register2', component: Regform2Component },
      { path: 'register3', component: Regform3Component },
      { path: 'register4', component: Regform4Component },
      { path: 'register5', component: Regform5Component },
      // { path: 'home', component: home },
      { path: '**', component: ErrorpageComponent }
    ])
  ],
  providers: [
    UsersService,
    Error
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
