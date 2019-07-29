import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelbaseComponent } from './modelbase.component';
import { RouterModule } from '@angular/router';
import { NavModule } from '../shared/nav/nav.module';
import { HeaderModule } from '../shared/header/header.module';
import { Child1Component } from './comps/child1/child1.component';
import { Child2Component } from './comps/child2/child2.component';
const routes = [
      { path: '', component: ModelbaseComponent},
      {
        path: 'child1',
        outlet: 'child1Output',
        component: Child1Component,
      },
      {
        path: 'child2',
        outlet: 'child2Output',
        component: Child2Component,
      }

];

@NgModule({
  declarations: [ModelbaseComponent, Child1Component, Child2Component],
  imports: [
    CommonModule,
    HeaderModule,
    NavModule,
    RouterModule.forChild(routes)
  ],
  exports: [ModelbaseComponent]
})
export class ModelbaseModule { }
