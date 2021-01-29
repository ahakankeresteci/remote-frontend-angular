import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user = new User()

  constructor(private route:ActivatedRoute,private userService:UserService,private snackBar: MatSnackBar) { }

  snackBarConfig = new MatSnackBarConfig()

  isUpdateJobads : Boolean = false

  ngOnInit(): void {
    this.setUser()

    this.setUpdateProfil()

    this.snackBarConfig.horizontalPosition = "end"
        this.snackBarConfig.verticalPosition = "bottom"
        this.snackBarConfig.duration = 5000
  }

  setUser(){
    const username = this.route.snapshot.paramMap.get('username')
    this.userService.getUser(username!).subscribe(
      (res)=>{
        this.user=res
      }
    )
  }

  setUpdateProfil(){
    console.log("update"+this.route.snapshot.pathFromRoot.toString().includes("jobads"))
    this.isUpdateJobads = this.route.snapshot.pathFromRoot.toString().includes("jobads")
  }


  follow(){
    this.snackBar.open('Henüz Tamamlanmadı','',this.snackBarConfig)
  }

  message(){
    this.snackBar.open('Henüz Tamamlanmadı','',this.snackBarConfig)
  }
  

}
