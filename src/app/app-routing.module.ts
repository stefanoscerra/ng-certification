import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ForecastPageComponent } from './components/forecast-page/forecast-page.component';

const routes: Routes = [
  {
    path: 'forecast/:zipCode', component: ForecastPageComponent
  },
  {
    path: '', component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }