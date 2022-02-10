import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddprofessorComponent } from './addprofessor/addprofessor.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [{path:'',component:HomeComponent},
{path:'addp',component:AddprofessorComponent},
{path:'signup',component:SignupComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
