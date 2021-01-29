import { HttpEvent, HttpRequest, HttpHandler, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>,
        next: HttpHandler): Observable<HttpEvent<any>> {

        const idToken = localStorage.getItem("id_token")
        if (idToken) {
            const cloned = req.clone({
                headers: req.headers.append("Authorization","Bearer " + idToken)
            })
            return next.handle(cloned);
        }
        else {
            return next.handle(req);
        }
        
        


       
    }
}