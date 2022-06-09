import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanformComponent } from './loanform/loanform.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {path:'Loanform',component:LoanformComponent},
  {path:'Home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
