import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


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
import { PerfsComponent } from './pages/perfs/perfs.component';
import { PerformanceComponent } from './components/performance/performance.component';
import { HomepageComponent } from './pages/homepage/homepage/homepage.component';
import { PlaceComponent } from './components/place/place.component';
import { MatTableModule } from '@angular/material/table';
import { PerfsDetailsComponent } from './pages/perfs/perfs-details/perfs-details.component';
import { CreationPerfComponent } from './pages/perfs/creation-perf/creation-perf.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DialogComponent } from './components/dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { PlaceDetailsComponent } from './pages/place-details/place-details.component';
import { MatCardModule } from '@angular/material/card';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { InscriptionComponent } from './components/authentification/inscription/inscription.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

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
    PerfsComponent,
    PerformanceComponent,
    HomepageComponent,
    PlaceComponent,
    PerfsDetailsComponent,
    CreationPerfComponent,
    DialogComponent,
    PlaceDetailsComponent,
    WelcomeComponent,
    AuthentificationComponent,
    InscriptionComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
    MatCardModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogComponent,
    AuthentificationComponent
  ]

})
export class AppModule { }
