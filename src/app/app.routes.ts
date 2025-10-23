import { Routes } from '@angular/router';
import { App } from './app';
import { PointsList } from './pages/points-list/points-list';
import { HomePage } from './pages/home-page/home-page';
import { PointsAdd } from './pages/points-add/points-add';
import { CategoriesList } from './pages/categories-list/categories-list';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'points-list', component: PointsList },
  { path: 'points-add', component: PointsAdd },
  { path: 'categories-list', component: CategoriesList },
];
