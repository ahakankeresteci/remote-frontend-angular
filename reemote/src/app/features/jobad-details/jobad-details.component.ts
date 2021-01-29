import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Auth } from '../../core/services/auth';
import { Jobad } from '../../models/jobad';
import { JobadService } from '../../shared/services/jobad.service';

@Component({
  selector: 'app-jobad-details',
  templateUrl: './jobad-details.component.html',
  styleUrls: ['./jobad-details.component.scss']
})
export class JobadDetailsComponent implements OnInit {

  jobad: Jobad = new Jobad()

  isMyPage: Boolean = false

  constructor(private jobadService: JobadService,
    private route: ActivatedRoute, private auth: Auth,private router : Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleJobadDetails()
    })
    this.updateIsmypage()

    
  }

  handleJobadDetails() {
    const jobId: string = this.route.snapshot.paramMap.get('id')!

    this.jobadService.getJobad(jobId).subscribe(
      data => {
        this.jobad = data
        this.updateIsmypage()
      }
    )
  }

  deleteJobad() {
    this.jobadService.deleteJobad(this.jobad._id)
  }

  updateIsmypage() {

    if (this.auth.isLoggedIn() && localStorage.getItem("username") == this.jobad.author_user_name) {
      this.isMyPage = true
    } else {
      this.isMyPage = false
    }
  }

}
