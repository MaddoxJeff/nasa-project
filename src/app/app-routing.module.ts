import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/components/pages/home/home.component';
import { MarsComponent } from '../app/components/pages/mars/mars.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'mars', component: MarsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, MarsComponent]
