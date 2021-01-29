import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobadListRoutingModule } from './jobad-list-routing.module';
import { JobadListComponent } from './jobad-list.component';
import { SharedModule } from '../../shared/shared.module';
import { NgbModule, NgbPagination } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [JobadListComponent],
  imports: [
    CommonModule,
    JobadListRoutingModule,
    SharedModule
    
  ]
})
export class JobadListModule { }
