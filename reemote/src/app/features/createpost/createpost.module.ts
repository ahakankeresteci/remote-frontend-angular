import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatepostRoutingModule } from './createpost-routing.module';
import { CreatepostComponent } from './createpost.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [CreatepostComponent],
  imports: [
    CommonModule,
    CreatepostRoutingModule,
    SharedModule
  ]
})
export class CreatepostModule { }
