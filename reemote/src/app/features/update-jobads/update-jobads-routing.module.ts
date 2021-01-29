import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateJobadsComponent } from './update-jobads.component';

const routes: Routes = [{ path: '', component: UpdateJobadsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateJobadsRoutingModule { }
