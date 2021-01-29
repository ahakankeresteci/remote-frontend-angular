import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobadDetailsComponent } from './jobad-details.component';

const routes: Routes = [{ path: '', component: JobadDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobadDetailsRoutingModule { }
