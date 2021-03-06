import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './comps/login/login.component';
import { LoginPkiComponent } from './comps/login-pki/login-pki.component';
import { LoginentranceComponent } from './comps/loginentrance/loginentrance.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
const routes = [
  {path: 'login-pki', component: LoginPkiComponent},
  {path: 'login', component: LoginComponent},
  {path: 'loginentrance', component:LoginentranceComponent},
  {path: 'quickmodel', loadChildren: '../quickmodel/quickmodel.module#QuickmodelModule'},
  { path: 'modelbase', loadChildren: '../modelbase/modelbase.module#ModelbaseModule'},
  { path: 'resourcepool', loadChildren: '../resourcepool/resourcepool.module#ResourcepoolModule'}
];
@NgModule({
  declarations: [LoginComponent, LoginPkiComponent, LoginentranceComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
