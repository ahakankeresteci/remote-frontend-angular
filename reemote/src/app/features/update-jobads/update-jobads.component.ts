import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Jobad } from '../../models/jobad';
import { JobadService } from '../../shared/services/jobad.service';
import { JobadValidator } from '../../validators/jobad-validator';

@Component({
  selector: 'app-update-jobads',
  templateUrl: './update-jobads.component.html',
  styleUrls: ['./update-jobads.component.scss']
})
export class UpdateJobadsComponent implements OnInit {

  oldjobad = new Jobad()
  jobadForm: FormGroup

  constructor(
    private router: Router, private jobadService: JobadService,private route :ActivatedRoute,private jobadValidator:JobadValidator
  ) { }

  ngOnInit(): void {
    this.setOldjob()
    this.jobadForm = this.jobadValidator.jobadForm
  }

  updateJobad(title: String, category: String, content: String, price: String) {
    var updatedJobad = new Jobad()
    
    updatedJobad._id=this.oldjobad._id
    updatedJobad.title=title
    updatedJobad.category=category
    updatedJobad.content=content
    updatedJobad.price=price
    updatedJobad.author_user_name=this.oldjobad.author_user_name
  
    this.jobadService.updateJobad(updatedJobad)

  }

  setOldjob(){
    const jobId: string = this.route.snapshot.paramMap.get('id')!

    this.jobadService.getJobad(jobId).subscribe(
      data => {
        this.oldjobad = data
        this.jobadValidator.jobadForm.patchValue(data)
      }
    )
  }

}
