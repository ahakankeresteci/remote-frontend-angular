import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateJobadsRoutingModule } from './update-jobads-routing.module';
import { UpdateJobadsComponent } from './update-jobads.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [UpdateJobadsComponent],
  imports: [
    CommonModule,
    UpdateJobadsRoutingModule,
    SharedModule
  ]
})
export class UpdateJobadsModule { }
