import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { JobadService } from './services/jobad.service'
import { UserService } from './services/user.service'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { JobadValidator } from '../validators/jobad-validator'

import { ReactiveFormsModule ,FormsModule} from '@angular/forms'
import { UserFormValidator } from '../validators/user-validator'

@NgModule({
  declarations: [],
  imports: [
    //vendor
    CommonModule,
    RouterModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    //vendor
    CommonModule,
    RouterModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [
    JobadService,
    UserService,
    JobadValidator,    
    UserFormValidator
    
  ]
})
export class SharedModule { }
