import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage/homepage.component';
import { PerfsComponent } from './pages/perfs/perfs.component';
import { CreationPerfComponent } from './pages/perfs/creation-perf/creation-perf.component';
import { PlaceDetailsComponent } from './pages/place-details/place-details.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomepageComponent },

  { path: 'performance/:id', component: PerfsComponent },
  { path: 'creation', component: CreationPerfComponent },
  { path: 'places/:id', component: PlaceDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
