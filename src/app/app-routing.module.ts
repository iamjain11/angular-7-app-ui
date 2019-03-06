import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';

import { MyDoughnutChartComponent } from './my-doughnut-chart/my-doughnut-chart.component';
import { MyRadarChartComponent } from './my-radar-chart/my-radar-chart.component';
import { MyPieChartComponent } from './my-pie-chart/my-pie-chart.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'bar-chart', component: MyBarChartComponent },
  { path: 'doughnut-chart', component: MyDoughnutChartComponent },
  { path: 'radar-chart', component: MyRadarChartComponent },
  { path: 'pie-chart', component: MyPieChartComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
