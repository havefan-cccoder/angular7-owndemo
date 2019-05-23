import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuickmodelComponent } from './quickmodel.component';
import { GraphComponent } from './comps/graph/graph.component';
import { DatatableComponent } from './comps/datatable/datatable.component';
import { TabsComponent } from './comps/tabs/tabs.component';
import { RouterModule } from '@angular/router';
import { NavModule } from '../shared/nav/nav.module';
import { HeaderModule } from '../shared/header/header.module';
import { TablistComponent } from './comps/tabs/tablist/tablist.component';
const routes = [
  { path: '', component: QuickmodelComponent, children: [
    {
      path: '11',
      component: GraphComponent
    },
    {
      path: '22',
      component: DatatableComponent
    },
    
  ]}
];
@NgModule({
  declarations: [QuickmodelComponent, GraphComponent, DatatableComponent, TabsComponent, TablistComponent],
  imports: [
    CommonModule,
    NavModule,
    HeaderModule,
    RouterModule.forChild(routes)
  ]
})
export class QuickmodelModule { }
