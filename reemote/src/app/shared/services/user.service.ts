import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { Auth } from '../../core/services/auth';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable()
export class UserService {

  private baseUrl = 'http://localhost:3000/api/users/'

  loggedInUser: User = new User()

  private config= new MatSnackBarConfig()
  
  constructor(private httpClient: HttpClient, private router: Router,private auth:Auth, private snackBar:MatSnackBar) {
    this.config.horizontalPosition = "end"
    this.config.verticalPosition = "bottom"
    this.config.duration = 5000
   }

  updateUser(user: User) {
    try {
      this.httpClient.put<User>(this.baseUrl + 'profile', user).subscribe(
        res => {
          console.info("Kullanıcı bilgileri güncellendi")
          localStorage.setItem('username', res.user_name.toString())
          console.log("res" + res)
          this.router.navigateByUrl('userdetail/' + res.user_name)
          this.snackBar.open("Kullanıcı bilgileri güncellendi",'',this.config)
        },
        err => {
          console.error("Kullanıcı bilgileri güncellenemedi: " + err)
          this.snackBar.open("Kullanıcı bilgileri güncellenemedi",'',this.config)
        }
      )
    }
    catch (err) {
      console.error("Kullanıcı bilgileri güncellenemedi: " + err)
      this.snackBar.open("Kullanıcı bilgileri güncellenemedi",'',this.config)
    }
  }

  deleteUser() {
    try {
      this.httpClient.delete(this.baseUrl + 'profile').subscribe(
        res => {
          console.info("Hesap Silindi")
          this.auth.logout()
          this.router.navigateByUrl('/')
          this.snackBar.open("Hesap Silindi",'',this.config)
        },
        err => {
          console.error("Hesap Silinemedi: " + err)
          this.snackBar.open("Hesap Silinemedi",'',this.config)
        }
      )
    }
    catch (err) {
      console.error("Hesap Silinemedi: " + err)
      this.snackBar.open("Hesap Silinemedi",'',this.config)
    }
  }

  getUser(username: String): Observable<User> {
    return this.httpClient.get<User>(this.baseUrl + 'profile/' + username)
  }

  getLoggedInUser() {

    this.getUser(localStorage.getItem("username")!).subscribe(
      (res) => {
        this.loggedInUser = res
        console.log(this.loggedInUser)

      }
    )

    return this.loggedInUser

  }




}
