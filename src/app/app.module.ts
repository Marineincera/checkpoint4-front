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
import { ConnexionComponent } from './components/authentification/connexion/connexion.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './core/header.interceptor';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSliderModule } from '@angular/material/slider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PlaceDialogComponent } from './pages/place-details/place-dialog/place-dialog.component';
import { CreationPlaceComponent } from './pages/place-details/creation-place/creation-place.component';
import { CreationComponent } from './pages/creation/creation.component';
import { AdminPricesComponent } from './pages/admin-prices/admin-prices.component';
import { ModalUpdatePricesComponent } from './pages/admin-prices/modal-update-prices/modal-update-prices.component';


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
    ConnexionComponent,
    NavbarComponent,
    PlaceDialogComponent,
    CreationPlaceComponent,
    CreationComponent,
    AdminPricesComponent,
    ModalUpdatePricesComponent,




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
    MatSnackBarModule,
    HttpClientModule,
    MatButtonModule,
    MatTabsModule,
    MatSliderModule,
    MatPaginatorModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogComponent,
    AuthentificationComponent,
    PlaceDialogComponent,
    ModalUpdatePricesComponent
  ]

})
export class AppModule { }
