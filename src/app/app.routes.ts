import { Routes } from '@angular/router';
import { App } from './app';
import { PointsList } from './pages/points-list/points-list';
import { HomePage } from './pages/home-page/home-page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'points-list', component: PointsList },
];
