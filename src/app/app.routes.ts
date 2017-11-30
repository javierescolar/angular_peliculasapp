import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {SearchComponent} from './components/search/search.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'search/:texto', component: SearchComponent },
  { path: 'pelicula/:id/:pag', component: PeliculaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTES = RouterModule.forRoot(app_routes);
