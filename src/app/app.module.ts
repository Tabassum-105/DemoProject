import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommunityComponent } from './community/community.component';
import { HeaderComponent } from './header/header.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogoComponent } from './logo/logo.component';
import { MenuComponent } from './menu/menu.component';
import { LocationComponent } from './location/location.component';
import { AboutComponent } from './about/about.component';
import { RecipesComponent } from './recipes/recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    CommunityComponent,
    HeaderComponent,
    LeftNavComponent,
    LogoComponent,
    MenuComponent,
    LocationComponent,
    AboutComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
