import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './auth/components/register/register.component';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { UsersComponent } from './dashboard/components/users/users.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './auth/components/login/login.component';
import { LocationsComponent } from './dashboard/components/locations/locations.component';
import { HomeComponent } from './dashboard/components/home/home.component';
import { ContactComponent } from './dashboard/components/contact/contact.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'locations',
    component: LocationsComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
