import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelbaseComponent } from './modelbase.component';
import { RouterModule } from '@angular/router';
const routes = [
  { path: '', component: ModelbaseComponent}
];

@NgModule({
  declarations: [ModelbaseComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ModelbaseComponent]
})
export class ModelbaseModule { }
