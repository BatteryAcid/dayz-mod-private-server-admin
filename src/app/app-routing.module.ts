import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DzDashboardComponent } from './dz-dashboard/dz-dashboard.component'
import { UserTableComponent } from './user/user-table/user-table.component';

const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DzDashboardComponent },
    { path: 'users', component: UserTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
