import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuickmodelComponent } from './quickmodel.component';
import { GraphComponent } from './comps/graph/graph.component';
import { DatatableComponent } from './comps/datatable/datatable.component';
import { TabsComponent } from './comps/tabs/tabs.component';
import { RouterModule } from '@angular/router';
import { NavModule } from '../shared/nav/nav.module';
import { HeaderModule } from '../shared/header/header.module';
const routes = [
  { path: '', component: QuickmodelComponent}
];
@NgModule({
  declarations: [QuickmodelComponent, GraphComponent, DatatableComponent, TabsComponent],
  imports: [
    CommonModule,
    NavModule,
    HeaderModule,
    RouterModule.forChild(routes)
  ]
})
export class QuickmodelModule { }
