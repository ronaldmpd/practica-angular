import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { NotFount404Component } from './not-fount-404/not-fount-404.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'user/:id/edit',
    component: UserEditComponent
  },
  {
    path: 'user/new',
    component: UserEditComponent
  },
  {
    path: '**',
    component: NotFount404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
