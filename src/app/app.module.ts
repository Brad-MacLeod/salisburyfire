import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SetupHelpComponent } from './setup-help/setup-help.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { ContactComponent } from './contact/contact.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { PageFirefightersComponent } from './page-firefighters/page-firefighters.component';
import { PageWelcomeComponent } from './page-welcome/page-welcome.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { PageDrawComponent } from './page-draw/page-draw.component';
import { PageFleetComponent } from './page-fleet/page-fleet.component';
import { ItemPersonComponent } from './item-person/item-person.component';
import { ItemTruckComponent } from './item-truck/item-truck.component';

@NgModule({
  declarations: [
    AppComponent,
    SetupHelpComponent,
    HomeComponent,
    HeaderComponent,
    HeaderMenuComponent,
    ContactComponent,
    PageFirefightersComponent,
    PageWelcomeComponent,
    PageContactComponent,
    PageAboutComponent,
    PageDrawComponent,
    PageFleetComponent,
    ItemPersonComponent,
    ItemTruckComponent, 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
