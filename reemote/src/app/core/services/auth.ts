import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';
import { AuthResult } from '../../models/auth-result';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';


@Injectable({
    providedIn: 'root'
})
export class Auth {

    baseUrl = "http://localhost:3000"

    private config = new MatSnackBarConfig()

    constructor(private http: HttpClient, private router: Router, private snackBar: MatSnackBar) {
        this.config.horizontalPosition = "end"
        this.config.verticalPosition = "bottom"
        this.config.duration = 5000
    }

    async login(email: string, password: string) {
        try {
            this.http.post<AuthResult>(this.baseUrl + '/api/users/login', { email: email, password: password })
                .subscribe(res => {
                    this.setSession(res)
                },
                err=>{
                    console.error("Yanlış Parola ya da Email: " + err)
                    this.snackBar.open("Yanlış Parola ya da Email", '', this.config)
                })
        }
        catch (err) {
            console.error("Yanlış Parola ya da Email: " + err)
            this.snackBar.open("Yanlış Parola ya da Email", '', this.config)
        }

    }

    async register(username: String, firstname: String, lastname: String, email: String, password: String) {
        try {
            this.http.post<AuthResult>(this.baseUrl + '/api/users/register', { user_name: username, first_name: firstname, last_name: lastname, email: email, password: password })
                .subscribe(res => {

                    this.setSession(res)
                    console.info("Kayıt Başarılı")
                    this.snackBar.open("Kayıt Başarılı", '', this.config)
                })
        }
        catch (err) { 
            console.error("Yanlış Parola ya da Email")
            this.snackBar.open("Yanlış Parola ya da Email", '', this.config)    
        }
    }

    private setSession(authResult: AuthResult) {
        const expiresAt = moment().add(authResult.expiresIn, 'hours')

        localStorage.setItem('username', authResult.data.username)
        localStorage.setItem('id_token', authResult.token)
        localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()))

        console.info("moment: " + moment().calendar())
        console.info("exp: " + this.getExpiration().calendar())
        console.info("islogged: " + moment().isBefore(this.getExpiration()))

        if (authResult.token) {
            console.info("Oturum Başlatıldı")
            this.router.navigateByUrl('/userdetail/' + localStorage.getItem('username'))
            this.snackBar.open("Oturum Başlatıldı", '', this.config)
        }
        else {

            console.error("Oturum Başlatılamadı")
            this.snackBar.open("Oturum Başlatılamadı", '', this.config)
        }
    }

    logout() {
        localStorage.removeItem("username")
        localStorage.removeItem("id_token")
        localStorage.removeItem("expires_at")
        console.info('Oturum Kapatıldı')
        this.snackBar.open("Oturum Kapatıldı", '', this.config)
    }

    isLoggedIn() {

        return moment().isBefore(this.getExpiration())

    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }

    getExpiration() {
        const expiration = localStorage.getItem("expires_at");
        const expiresAt = JSON.parse(expiration!);

        return moment(expiresAt);
    }



}
