import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './comps/login/login.component';
import { LoginPkiComponent } from './comps/login-pki/login-pki.component';
import { LoginentranceComponent } from './comps/loginentrance/loginentrance.component';
import { RouterModule } from '@angular/router';

const routes = [
  {path: 'login-pki', component: LoginPkiComponent},
  {path: 'login', component: LoginComponent},
  {path: 'loginentrance', component:LoginentranceComponent},
  {path: 'quickmodel', loadChildren: '../quickmodel/quickmodel.module#QuickmodelModule'}
]
@NgModule({
  declarations: [LoginComponent, LoginPkiComponent, LoginentranceComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
