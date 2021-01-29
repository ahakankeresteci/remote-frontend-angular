import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { JobadService } from '../../shared/services/jobad.service';
import { JobadValidator } from '../../validators/jobad-validator';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.scss']
})
export class CreatepostComponent implements OnInit {

  jobadForm:FormGroup
  constructor(private jobadService: JobadService, private route: Router, private jobadValidator:JobadValidator) { }

  ngOnInit(): void {
    this.jobadForm = this.jobadValidator.jobadForm
  }

  createJobad(title: String, category: String, content: String, price: String) {
    const jobad = {
      title: title,
      category: category,
      content: content,
      price: price
    }
    this.jobadService.createJobad(jobad)
    
  }



}
