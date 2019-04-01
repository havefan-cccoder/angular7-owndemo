import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelbaseComponent } from './modelbase.component';
import { RouterModule } from '@angular/router';
import { NavModule } from '../shared/nav/nav.module';
const routes = [
  { path: '', component: ModelbaseComponent}
];

@NgModule({
  declarations: [ModelbaseComponent],
  imports: [
    CommonModule,
    NavModule,
    RouterModule.forChild(routes)
  ],
  exports: [ModelbaseComponent]
})
export class ModelbaseModule { }
