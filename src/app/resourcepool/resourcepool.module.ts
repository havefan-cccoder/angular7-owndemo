import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourcepoolComponent } from './resourcepool.component';
import { RouterModule } from '@angular/router';
import { NavModule } from '../shared/nav/nav.module';
import { HeaderModule } from '../shared/header/header.module';
const routes = [
  { path: '', component: ResourcepoolComponent}
];
@NgModule({
  declarations: [ResourcepoolComponent],
  imports: [
    CommonModule,
    HeaderModule,
    NavModule,
    RouterModule.forChild(routes)
  ]
})
export class ResourcepoolModule { }
