import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DzDashboardComponent } from './dz-dashboard/dz-dashboard.component'
import { UsersComponent } from './users/users.component'

const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DzDashboardComponent },
    { path: 'users', component: UsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
