import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobadDetailsRoutingModule } from './jobad-details-routing.module';
import { JobadDetailsComponent } from './jobad-details.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [JobadDetailsComponent],
  imports: [
    CommonModule,
    JobadDetailsRoutingModule,
    SharedModule
  ]
})
export class JobadDetailsModule { }
