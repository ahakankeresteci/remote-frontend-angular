import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../core/services/auth';
import { UserFormValidator } from '../../validators/user-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userRegisterForm: FormGroup

  constructor(private auth:Auth,private route: Router,private userValidator:UserFormValidator) { }

  ngOnInit(): void {
    this.userRegisterForm = this.userValidator.userRegistrationForm
  }

  register(username: String,firstname: String,lastname: String , email: String,password: String){
    
    this.auth.register(username,firstname,lastname,email,password)
}

}
