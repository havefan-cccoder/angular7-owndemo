import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { RouterModule } from '@angular/router';
const routes = [
  {path: 'quickmodel', loadChildren: '../../quickmodel/quickmodel.module#QuickmodelModule'},
  { path: 'modelbase', loadChildren: '../../modelbase/modelbase.module#ModelbaseModule'},
  { path: 'resourcepool', loadChildren: '../../resourcepool/resourcepool.module#ResourceModule'}
];
@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [NavComponent]
})
export class NavModule { }
