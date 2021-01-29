import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../core/services/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: Auth, private route: Router) { }

  ngOnInit(): void {
  }

  async login(email:string, password:string) {
      await this.auth.login(email, password)
  }

}
