import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', loadChildren: () => import('./home/home.module').then(resp => resp.HomeModule) },
  { path: 'animais', loadChildren: () => import('./animais/animais.module').then(resp => resp.AnimaisModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
