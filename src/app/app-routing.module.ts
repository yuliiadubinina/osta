import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstPageComponent } from './components/pages/first-page/first-page.component';
import { SecondPageComponent } from './components/pages/second-page/second-page.component';
import { ThirdPageComponent } from './components/pages/third-page/third-page.component';

const routes: Routes = [
  { path: '', component: FirstPageComponent},
  { path: 'first', component: FirstPageComponent },
  { path: 'second', component: SecondPageComponent },
  { path: 'third', component: ThirdPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
