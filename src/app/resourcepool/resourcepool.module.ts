import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourcepoolComponent } from './resourcepool.component';
import { RouterModule } from '@angular/router';
const routes = [
  { path: '', component: ResourcepoolComponent}
];
@NgModule({
  declarations: [ResourcepoolComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ResourcepoolModule { }
