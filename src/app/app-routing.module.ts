import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage/homepage.component';
import { PerfsComponent } from './pages/perfs/perfs.component';
import { CreationPerfComponent } from './pages/perfs/creation-perf/creation-perf.component';
import { PlaceDetailsComponent } from './pages/place-details/place-details.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { PerformancesComponent } from './pages/homepage/performances/performances.component';
import { InformationsComponent } from './pages/homepage/informations/informations.component';
import { IntroductionComponent } from './pages/homepage/introduction/introduction.component';
import { CreationComponent } from './pages/creation/creation.component';
import { AdminPricesComponent } from './pages/admin-prices/admin-prices.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'home', component: HomepageComponent },

  { path: 'performance/:id', component: PerfsComponent },
  { path: 'creation', component: CreationComponent },
  { path: 'places/:id', component: PlaceDetailsComponent },

  //
  { path: 'performances', component: PerformancesComponent },
  { path: 'infos', component: InformationsComponent },
  { path: 'signin', component: IntroductionComponent },
  { path: 'admin/prices', component: AdminPricesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
