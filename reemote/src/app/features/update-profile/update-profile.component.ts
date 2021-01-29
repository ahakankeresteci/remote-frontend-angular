import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Auth } from '../../core/services/auth';
import { User } from '../../models/user';
import { UserService } from '../../shared/services/user.service';
import { UserFormValidator } from '../../validators/user-validator';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {

  user: User = new User()

  userValidator : FormGroup

  isUpdateLoginInfo: boolean = false

  constructor(private httpClient: HttpClient, private userService: UserService, private route: ActivatedRoute,
    private router : Router,private auth:Auth, private userFormValidator:UserFormValidator) {
    
  }

  ngOnInit(): void {
    this.setUser()
    console.log(this.user)
    
    this.userValidator = this.userFormValidator.userUpdateForm
  }

  setForm(user:User){
    this.userFormValidator.userUpdateForm.patchValue(user)
  }

  update(username: string, firstname: string, lastname: string, location: string, job: string, website: string) {
    var updatedUser = new User()

    updatedUser.user_name=username
    updatedUser.first_name=firstname
    updatedUser.last_name=lastname
    updatedUser.location=location
    updatedUser.job=job
    updatedUser.website=website

    this.userService.updateUser(updatedUser)
    
  }

  updateLoginInfo(email:string,oldPassword: String,newPassword){
    const loginInfo = {
      email: email,
      oldPassword: oldPassword,
      newPassword: newPassword
    }
    
  }


  deleteProfile(){
    this.userService.deleteUser()
  }

  setUser(){
    this.userService.getUser(localStorage.getItem("username")!).subscribe(
      (res)=>{
        this.user=res
        console.log(this.user)
        this.setForm(res)
        
      }
    )
  }

}
