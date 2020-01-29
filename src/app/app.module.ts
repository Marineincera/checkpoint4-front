import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IntroductionComponent } from './pages/homepage/introduction/introduction.component';
import { PerformancesComponent } from './pages/homepage/performances/performances.component';
import { ShowsListComponent } from './pages/homepage/performances/shows-list/shows-list.component';
import { ArtistsListComponent } from './pages/homepage/performances/artists-list/artists-list.component';
import { InformationsComponent } from './pages/homepage/informations/informations.component';
import { AgendaComponent } from './pages/homepage/informations/agenda/agenda.component';
import { PricesComponent } from './pages/homepage/informations/prices/prices.component';
import { ContactComponent } from './pages/homepage/informations/contact/contact.component';
import { LocationComponent } from './pages/homepage/informations/location/location.component';
import { ShowComponent } from './pages/show/show.component';


@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    PerformancesComponent,
    ShowsListComponent,
    ArtistsListComponent,
    InformationsComponent,
    AgendaComponent,
    PricesComponent,
    ContactComponent,
    LocationComponent,
    ShowComponent,

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
