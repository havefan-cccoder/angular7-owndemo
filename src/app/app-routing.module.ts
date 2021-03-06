import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {path: '',redirectTo: '/login-pki', pathMatch: 'full'},
  {path: '',redirectTo: '/login', pathMatch: 'full'},
  {path: '',loadChildren:'../app/user/user.module#UserModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
