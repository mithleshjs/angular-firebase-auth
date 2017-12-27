import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../guards/auth/auth.guard';
import { GuestGuard } from '../../guards/guest/guest.guard';
import { HomeComponent } from '../../components/pages/home/home.component';
import { LoginComponent } from '../../components/pages/login/login.component';
import { SignupComponent } from './../../components/pages/signup/signup.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent, canActivate: [GuestGuard]},
  { path: 'signup', component: SignupComponent, canActivate: [GuestGuard]}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: false }) ],
  exports: [ RouterModule ]
})
export class RoutesModule { }
