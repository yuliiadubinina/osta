import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstPageComponent } from './components/pages/first-page/first-page.component';
import { SecondPageComponent } from './components/pages/second-page/second-page.component';
import { ThirdPageComponent } from './components/pages/third-page/third-page.component';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { page: 'home' } },
  { path: 'first', component: FirstPageComponent, data: { page: 'first' }},
  { path: 'second', component: SecondPageComponent, data: { page: 'second' } },
  { path: 'third', component: ThirdPageComponent, data: { page: 'third' }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
