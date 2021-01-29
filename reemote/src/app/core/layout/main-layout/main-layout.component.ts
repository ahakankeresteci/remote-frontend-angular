import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Auth} from '../../services/auth'

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  categories : String[] = [
    "Yazılım ve Teknoloji",
    "Grafik ve Tasarım",
    "Ses ve Müzik",
    "Yazı ve Çeviri"
  ]

  username! : string

  constructor(private auth:Auth,private router: Router) { }

  ngOnInit(): void {
  }

  isLoggedIn(){
    return this.auth.isLoggedIn()
  }

  logout(){
    return this.auth.logout()
  }

  getUsername() {
    if(localStorage.getItem("username")){
      this.username=localStorage.getItem("username")!
      return true
    }else{return false}
  }

  searchFunc(value: String){
    this.router.navigateByUrl(`/search/${value}`);
  }
}
